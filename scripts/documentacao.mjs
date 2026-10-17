import fs from 'node:fs';
import path from 'node:path';

export function markdownFiles(root) {
  const walk = dir => fs.existsSync(dir) ? fs.readdirSync(dir, {withFileTypes: true})
    .flatMap(entry => entry.isDirectory() ? walk(path.join(dir, entry.name))
      : entry.name.endsWith('.md') ? [path.join(dir, entry.name)] : []) : [];
  return ['README.md', 'CONTRIBUTING.md'].map(name => path.join(root, name)).filter(fs.existsSync)
    .concat(walk(path.join(root, 'docs')), walk(path.join(root, '.github'))).sort();
}

// Preserva a quantidade de linhas para mensagens e ignora exemplos de código.
function prose(text) {
  let fence;
  return text.replace(/<!--[\s\S]*?-->/g, match => match.replace(/[^\n]/g, ' '))
    .split('\n').map(line => {
      const token = line.match(/^\s{0,3}(`{3,}|~{3,})(.*)$/);
      if (fence) {
        if (token && token[1][0] === fence[0] && token[1].length >= fence.length && !token[2].trim()) fence = undefined;
        return '';
      }
      if (token) { fence = token[1]; return ''; }
      return line;
    }).join('\n');
}

const withoutCode = text => text.replace(/(`+)([^\n]*?)\1/g, '');
const external = url => /^[a-z][a-z\d+.-]*:/i.test(url) || url.startsWith('//');
const labelKey = label => label.trim().replace(/\s+/g, ' ').toLowerCase();
const destinationPattern = /(!?\[[^\]\n]*\]\(\s*)(?:<([^>\n]+)>|((?:[^\s()<>]|\([^()\n]*\))+))(\s*(?:["'][^\n]*?["']\s*)?\))/g;

function rewriteLine(line, transform) {
  // Inline-code chunks are left byte-for-byte intact.
  return line.split(/(`+[^\n]*?`+)/g).map(chunk => chunk.startsWith('`') ? chunk
    : chunk.replace(destinationPattern, (_, before, angle, bare, after) => {
      const value = transform(angle ?? bare);
      return before + (angle !== undefined ? `<${value}>` : value) + after;
    }).replace(/((?:href|src)\s*=\s*["'])([^"']+)(["'])/gi,
      (_, before, url, after) => before + transform(url) + after)
      .replace(/^(\s{0,3}\[[^\]]+\]:\s*)(?:<([^>]+)>|(\S+))/,
        (_, before, angle, bare) => before + (angle !== undefined ? `<${transform(angle)}>` : transform(bare))))
    .join('');
}

export function rebaseLinks(text, source, output) {
  if (path.resolve(source) === path.resolve(output)) return text;
  const visible = prose(text).split('\n');
  return text.split('\n').map((line, index) => !visible[index] ? line : rewriteLine(line, url => {
    if (external(url) || url.startsWith('/')) return url;
    const hash = url.indexOf('#');
    const file = hash < 0 ? url : url.slice(0, hash);
    const fragment = hash < 0 ? '' : url.slice(hash);
    const query = file.indexOf('?');
    const pathname = query < 0 ? file : file.slice(0, query);
    const suffix = query < 0 ? '' : file.slice(query);
    const target = pathname ? path.resolve(path.dirname(source), decodeURIComponent(pathname)) : source;
    return path.relative(path.dirname(output), target).split(path.sep).join('/') + suffix + fragment;
  })).join('\n');
}

export function anchors(text) {
  const visible = prose(text);
  const result = new Set([...visible.matchAll(/\b(?:id|name)\s*=\s*["']([^"']+)["']/gi)].map(match => match[1]));
  const repeats = new Map();
  for (const line of visible.split('\n')) {
    const heading = line.match(/^ {0,3}#{1,6}\s+(.+?)\s*#*$/);
    if (!heading) continue;
    const slug = heading[1].replace(/!?\[([^\]]+)\]\([^)]*\)/g, '$1')
      .replace(/<[^>]*>/g, '').toLowerCase().replace(/[^\p{L}\p{M}\p{N}_\-\s]/gu, '').replace(/\s/g, '-');
    const count = repeats.get(slug) ?? 0;
    repeats.set(slug, count + 1);
    result.add(count ? `${slug}-${count}` : slug);
  }
  return result;
}

export function links(text) {
  const visible = withoutCode(prose(text));
  const result = [];
  const definitions = new Map();
  const add = (url, index) => result.push({url, line: visible.slice(0, index).split('\n').length});
  for (const match of visible.matchAll(/^ {0,3}\[([^\]]+)\]:\s*(?:<([^>\n]+)>|(\S+))/gm)) {
    definitions.set(labelKey(match[1]), match[2] ?? match[3]);
    add(match[2] ?? match[3], match.index);
  }
  for (const match of visible.matchAll(destinationPattern)) add(match[2] ?? match[3], match.index);
  for (const match of visible.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/gi)) add(match[1], match.index);
  for (const match of visible.matchAll(/!?\[([^\]\n]+)\](?:\[([^\]\n]*)\])?/g)) {
    const next = visible.slice(match.index + match[0].length);
    if (next.startsWith('(') || next.startsWith(':')) continue;
    const key = labelKey(match[2] || match[1]);
    if (definitions.has(key)) add(definitions.get(key), match.index);
    else if (match[2] !== undefined) result.push({url: '', line: visible.slice(0, match.index).split('\n').length, error: `referência sem definição: ${key}`});
  }
  return result;
}

function exactPath(filename, root, cache) {
  const relative = path.relative(root, filename);
  if (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) return false;
  let current = root;
  for (const segment of relative.split(path.sep).filter(Boolean)) {
    const target = path.join(current, segment);
    if (!cache.has(target)) cache.set(target, fs.existsSync(current)
      && fs.statSync(current).isDirectory() && fs.readdirSync(current).includes(segment));
    if (!cache.get(target)) return false;
    current = target;
  }
  return true;
}

export function validateFiles(files, {root, overrides = new Map()} = {}) {
  const errors = [], cache = new Map(), existence = new Map();
  const read = file => {
    if (!cache.has(file)) cache.set(file, overrides.get(file) ?? fs.readFileSync(file, 'utf8'));
    return cache.get(file);
  };
  for (const file of files) {
    for (const link of links(read(file))) {
      const report = message => errors.push(`${path.relative(root, file).split(path.sep).join('/')}:${link.line}: ${message}`);
      if (link.error) { report(link.error); continue; }
      if (external(link.url)) continue;
      try {
        const [pathname, ...fragments] = link.url.split('#');
        const filename = decodeURIComponent(pathname.split('?')[0]);
        const fragment = decodeURIComponent(fragments.join('#'));
        let target = filename ? path.resolve(filename.startsWith('/') ? root : path.dirname(file), filename.replace(/^\//, '')) : file;
        if (!overrides.has(target) && !exactPath(target, root, existence)) { report(`arquivo ausente ou caixa incorreta: ${link.url}`); continue; }
        if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, 'README.md');
        if (fragment && /\.md$/i.test(target) && !anchors(read(target)).has(fragment)) report(`âncora ausente: ${link.url}`);
      } catch (error) { report(`destino inválido: ${link.url} (${error.message})`); }
    }
  }
  return [...new Set(errors)];
}
