import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {anchors, links, markdownFiles, rebaseLinks, validateFiles} from './documentacao.mjs';

function fixture(t) {
  const temporaryDirectory = fs.realpathSync(os.tmpdir());
  const root = fs.mkdtempSync(path.join(temporaryDirectory, 'residuum-docs-'));
  t.after(() => {
    assert.equal(path.dirname(path.resolve(root)), temporaryDirectory);
    assert.ok(path.basename(root).startsWith('residuum-docs-'));
    fs.rmSync(root, {recursive: true, force: true});
  });
  const write = (name, text) => {
    const file = path.join(root, name);
    fs.mkdirSync(path.dirname(file), {recursive: true});
    fs.writeFileSync(file, text);
    return file;
  };
  return {root, write};
}

test('âncoras preservam acentos, IDs explícitos e títulos repetidos', () => {
  const text = '# Visão e ação\n## Mesmo título\n## Mesmo título\n<a id="tsk-mor-001"></a>\n## `Código` e [link](destino.md)';
  assert.deepEqual([...anchors(text)], ['tsk-mor-001', 'visão-e-ação', 'mesmo-título', 'mesmo-título-1', 'código-e-link']);
});

test('exemplos em cercas e código inline não criam links navegáveis', () => {
  const text = '```md\n[exemplo](ausente.md)\n```\n~~~text\n[exemplo](outro.md)\n~~~\n`[exemplo](inline.md)`\n[real](real.md)';
  assert.deepEqual(links(text).map(link => link.url), ['real.md']);
});

test('cercas longas não terminam com uma cerca menor', () => {
  assert.deepEqual(links('````md\n```\n[exemplo](ausente.md)\n````\n[real](real.md)').map(link => link.url), ['real.md']);
});

test('arquivo, imagem, fragmentos e referências Markdown válidas', t => {
  const {root, write} = fixture(t);
  write('docs/alvo.md', '# Visão geral\n## Repetido\n## Repetido\n<a id="estavel"></a>');
  write('docs/imagem.png', 'fixture');
  const file = write('README.md', '[alvo](docs/alvo.md#visão-geral)\n![imagem](docs/imagem.png)\n[segundo][ref]\n[ref]: docs/alvo.md#repetido-1\n<a href="docs/alvo.md#estavel">HTML</a>\n[atalho]\n[atalho]: docs/alvo.md');
  assert.deepEqual(validateFiles([file], {root}), []);
});

test('arquivo ausente, caixa incorreta, âncora e referência inválidas são reportados', t => {
  const {root, write} = fixture(t);
  write('docs/alvo.md', '# Existe');
  const file = write('README.md', '[ausente](docs/ausente.md)\n[âncora](docs/alvo.md#nao-existe)\n[caixa](docs/ALVO.md)\n[referência][sem-definicao]');
  const errors = validateFiles([file], {root});
  assert.equal(errors.length, 4);
  assert.ok(errors.some(error => error.includes(':1: arquivo ausente')));
  assert.ok(errors.some(error => error.includes(':2: âncora ausente')));
  assert.ok(errors.some(error => error.includes(':3: arquivo ausente')));
  assert.ok(errors.some(error => error.includes('referência sem definição')));
});

test('caixa de diretórios também é verificada no Windows', t => {
  const {root, write} = fixture(t);
  write('docs/perfis/morador.md', '# Morador');
  const file = write('README.md', '[perfil](docs/PERFIS/morador.md)');
  assert.equal(validateFiles([file], {root}).length, 1);
});

test('links de arquivo não escapam da raiz documental', t => {
  const {root, write} = fixture(t);
  const file = write('README.md', '[fora](../fora.md)');
  assert.equal(validateFiles([file], {root}).length, 1);
});

test('URLs externas são preservadas e não consultadas', t => {
  const {root, write} = fixture(t);
  const file = write('README.md', '[Git](https://example.invalid/path#no-network)\n[Contato](mailto:team@example.invalid)');
  assert.deepEqual(validateFiles([file], {root}), []);
});

test('rebase calcula os caminhos de fontes aninhadas e preserva código e URLs', t => {
  const {root, write} = fixture(t);
  const source = write('docs/perfis/morador.md', '# Perfil');
  const output = path.join(root, 'docs/geral.md');
  const text = '[foto](../imagens/home.png)\n[local](#perfil)\n[externo](https://example.invalid)\n[ref]: ../regras.md#regras\n`[exemplo](../nao-mudar.md)`\n```text\n[exemplo](../nao-mudar.md)\n```';
  const result = rebaseLinks(text, source, output);
  assert.ok(result.includes('[foto](imagens/home.png)'));
  assert.ok(result.includes('[local](perfis/morador.md#perfil)'));
  assert.ok(result.includes('[ref]: regras.md#regras'));
  assert.ok(result.includes('[externo](https://example.invalid)'));
  assert.ok(result.includes('`[exemplo](../nao-mudar.md)`'));
  assert.ok(result.includes('```text\n[exemplo](../nao-mudar.md)\n```'));
  assert.equal(rebaseLinks(text, source, source), text);
});

test('destinos com espaços e parênteses são reconhecidos', t => {
  const {root, write} = fixture(t);
  write('docs/com espaço.md', '# Título');
  write('docs/arquivo(v1).md', '# Título');
  const file = write('README.md', '[espaço](<docs/com espaço.md#título>)\n[parênteses](docs/arquivo(v1).md#título)');
  assert.deepEqual(validateFiles([file], {root}), []);
});

test('compilado em memória é validado antes de ser escrito', t => {
  const {root, write} = fixture(t);
  const file = write('docs/geral.md', '# Antigo');
  write('README.md', '[novo](docs/geral.md#novo)');
  const files = markdownFiles(root);
  assert.equal(validateFiles(files, {root}).length, 1);
  assert.deepEqual(validateFiles(files, {root, overrides: new Map([[file, '# Novo']])}), []);
  assert.equal(fs.readFileSync(file, 'utf8'), '# Antigo');
});

test('varredura inclui índices, histórico e templates, mas exclui temporários', t => {
  const {root, write} = fixture(t);
  const expected = ['README.md', 'CONTRIBUTING.md', 'docs/README.md', 'docs/07-historico/fonte.md', '.github/PULL_REQUEST_TEMPLATE.md'];
  for (const name of expected) write(name, '# Documento');
  write('tmp/local.md', '# Ignorado');
  write('node_modules/lib/README.md', '# Ignorado');
  assert.deepEqual(markdownFiles(root).map(file => path.relative(root, file).split(path.sep).join('/')).sort(), expected.sort());
});
