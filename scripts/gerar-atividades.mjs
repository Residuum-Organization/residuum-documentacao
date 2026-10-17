import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {markdownFiles, rebaseLinks, validateFiles} from './documentacao.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const base = path.join(root, 'docs/01-planejamento');
const outputPath = path.join(base, '01-atividades-gerais.md');
const read = name => {
  const source = path.resolve(base, name);
  return rebaseLinks(fs.readFileSync(source, 'utf8').replace(/\r\n/g, '\n'), source, outputPath);
};
const profiles = [
  ['02-perfis/01-morador.md', 'morador', 'Morador', 'MOR', 26],
  ['02-perfis/02-ponto-de-coleta.md', 'ponto', 'Ponto de coleta', 'PON', 5],
  ['02-perfis/03-cooperativa.md', 'cooperativa', 'Cooperativa', 'COO', 4],
  ['02-perfis/04-administrador.md', 'administrador', 'Administrador', 'ADM', 17],
  ['02-perfis/05-transversal.md', 'compartilhadas', 'Fundamentos compartilhados e qualidade', 'TRA', 14],
];

function cards(text) {
  const matches = [...text.matchAll(/^<a id="(tsk-[a-z]+-\d+)"><\/a>\n\n## (TSK-[A-Z]+-\d+) — ([^\n]+)\n/gm)];
  return matches.map((m, i) => ({
    id: m[2], title: m[3], text: text.slice(m.index, matches[i + 1]?.index ?? text.length).trim(),
  }));
}

function requireThat(condition, message) {
  if (!condition) throw new Error(message);
}

function validateLinks(generated) {
  const errors = validateFiles(markdownFiles(root), {root, overrides: new Map([[outputPath, generated]])});
  requireThat(!errors.length, 'Referências inválidas:\n' + errors.join('\n'));
}

function body(text) {
  return text.replace(/^# [^\n]+\n+/, '').replace(/^\[[^\n]+\n+/, '').trim();
}

function nest(text) {
  let fenced = false;
  return text.split('\n').map(line => {
    if (/^\s*```/.test(line)) fenced = !fenced;
    return !fenced && /^#{1,5} /.test(line) ? '#' + line : line;
  }).join('\n');
}

function render() {
  const sources = profiles.map(([file, anchor, title, prefix, expected]) => {
    const text = read(file), list = cards(text);
    requireThat(list.length === expected && list.every(c => c.id.startsWith(`TSK-${prefix}-`)), `${file}: número ou perfil de fichas incorreto`);
    return {file, anchor, title, text, list};
  });
  const execution = sources.flatMap(s => s.list);
  const decisions = cards(read('04-decisoes.md'));
  const future = cards(read('08-pendencias-gerais.md'));
  const all = [...execution, ...decisions, ...future];
  requireThat(execution.length === 66 && decisions.length === 26 && future.length === 1, 'Distribuição incorreta de execução e decisões');
  requireThat(all.length === 93 && new Set(all.map(c => c.id)).size === 93, 'Identificadores ausentes ou duplicados');
  const expectedIds = profiles.flatMap(([, , , prefix, count]) => Array.from({length: count}, (_, index) =>
    `TSK-${prefix}-${String(index + (prefix === 'TRA' ? 0 : 1)).padStart(3, '0')}`));
  expectedIds.push(...Array.from({length: 27}, (_, index) => `TSK-DEC-${String(index + 1).padStart(3, '0')}`));
  requireThat(expectedIds.every(id => all.some(c => c.id === id)), 'Um identificador original foi substituído ou removido');
  requireThat(future[0].id === 'TSK-DEC-027', 'PD-027 deve ficar no documento de avaliação posterior');
  const cases = all.flatMap(c => [...c.text.matchAll(/^#### (TSK-[A-Z]+-\d+-CT-\d+)/gm)].map(m => m[1]));
  requireThat(cases.length === 228 && new Set(cases).size === 228, 'Casos individuais ausentes ou duplicados');
  for (const card of all) {
    const localCases = [...card.text.matchAll(/^#### (TSK-[A-Z]+-\d+-CT-\d+)/gm)].map(m => m[1]);
    requireThat(localCases.every((id, index) => id === `${card.id}-CT-${String(index + 1).padStart(2, '0')}`), `${card.id}: sequência ou vínculo de casos inválido`);
  }
  for (const c of execution) {
    requireThat(!c.text.includes('PD-027'), `${c.id}: evolução futura não deve bloquear uma task atual`);
    for (const pd of new Set(c.text.match(/PD-\d{3}/g) ?? [])) {
      requireThat(decisions.some(d => d.id === `TSK-DEC-${pd.slice(3)}`), `${c.id}: decisão sem registro ${pd}`);
    }
    for (const dependency of new Set(c.text.match(/TSK-[A-Z]+-\d{3}(?!\d)/g) ?? [])) {
      requireThat(all.some(d => d.id === dependency), `${c.id}: referência sem ficha ${dependency}`);
    }
  }
  const integrated = read('../05-qualidade/02-testes-integrados.md');
  const integratedIds = [...integrated.matchAll(/^### (CT-\d+-\d+)/gm)].map(m => m[1]);
  requireThat(integratedIds.length === 45 && new Set(integratedIds).size === 45, 'Casos integrados ausentes ou duplicados: esperado 45');
  const technical = read('../03-tecnologia/02-arquitetura-e-banco.md');
  const technicalIds = [...technical.matchAll(/^## (TEC-\d{2}) —/gm)].map(m => m[1]);
  requireThat(technicalIds.length === 6 && technicalIds.every((id, index) => id === `TEC-${String(index + 1).padStart(2, '0')}`), 'Recortes técnicos ausentes ou duplicados: esperado TEC-01 a TEC-06');

  let result = `# Residuum — documento geral das atividades\n\n<!-- GERADO: edite os documentos por perfil e execute scripts/gerar-atividades.mjs. -->\n\n**Atualização das fontes:** 17/10/2026. **Prazo informado:** 20/11/2026; sujeito ao recorte e à capacidade definidos pela equipe.\n\nEste documento compila as **66 fichas completas de execução**: 26 do morador, cinco do ponto de coleta, quatro da cooperativa, 17 da administração e 14 transversais. Seus critérios e 147 casos individuais de software são preservados. Os 26 registros de decisão necessários à execução são acessados por referências; sua aprovação não representa implementação concluída. Os 45 casos integrados e seis recortes técnicos complementam as fichas sem acrescentar funcionalidades.\n\n**Fonte de edição:** documentos por perfil e arquivos de apoio. As pendências das fichas se limitam ao impacto na implementação, integração, teste ou aceite. Questões gerais e evolução futura são acompanhadas em documento separado.\n\n## Navegação\n\n- [Fluxo de trabalho e qualidade](#fluxo-de-atividades)\n`;
  result += sources.map(s => `- [${s.title}](#${s.anchor}) — [fonte editável](${s.file})`).join('\n');
  result += '\n- [Decisões relacionadas](#decisoes)\n- [Arquitetura, refatoração e banco](#tecnicas)\n- [Matriz de importância](#matriz)\n- [Casos integrados](#testes)\n\n[Guia das tasks](README.md) · [Sequência por perfil](06-entregas-por-perfil.md) · [Proposta de sprints](07-sprints.md)\n\n';
  result += body(read('../05-qualidade/01-fluxo-e-qualidade.md')) + '\n\n';
  for (const source of sources) {
    result += `<a id="${source.anchor}"></a>\n\n## ${source.title}\n\n[Fonte editável das fichas](${source.file}).\n\n${nest(body(source.text))}\n\n`;
  }
  result += '<a id="decisoes"></a>\n\n## Decisões relacionadas às tasks\n\nAs fichas de execução indicam quais decisões alteram seu trabalho ou aceite. Consulte os registros abaixo para alternativas, aprovação e verificações documentais. A decisão de UX de PD-006 já aprovada permanece vigente; somente seus contratos reais ainda abertos condicionam os trechos dependentes.\n\n';
  for (const decision of decisions) result += `<a id="${decision.id.toLowerCase()}"></a>\n\n- [${decision.id} — PD-${decision.id.slice(-3)}](04-decisoes.md#${decision.id.toLowerCase()})\n\n`;
  // Compatibilidade para links antigos, sem incorporar a pauta futura ao compilado.
  result += '<a id="tsk-dec-027"></a>\n\n[Registro transferido para avaliação posterior](08-pendencias-gerais.md#tsk-dec-027).\n\n';
  result += '<a id="tecnicas"></a>\n\n' + body(technical) + '\n\n';
  const operationalMatrix = body(read('05-matriz-prioridades.md'))
    .replace('## Matriz das 92 atividades relacionadas às tasks', '## Matriz das 66 atividades de execução')
    .replace(/^\|.*TSK-DEC-\d{3}.*\n/gm, '')
    .replace(/^A avaliação futura TSK-DEC-027.*\n?/gm, '');
  result += '<a id="matriz"></a>\n\n## Matriz de importância\n\n'+nest(operationalMatrix)+'\n\n';
  result += '<a id="testes"></a>\n\n## Casos integrados de validação\n\n'+nest(body(integrated))+'\n';
  result = result.trimEnd()+'\n';
  requireThat([...result.matchAll(/^### TSK-(?:MOR|PON|COO|ADM|TRA)-\d{3} —/gm)].length === 66, 'Compilado sem todas as fichas de execução');
  validateLinks(result);
  return result;
}

try {
  requireThat(process.argv.slice(2).every(arg => arg === '--check'), 'Uso: node scripts/gerar-atividades.mjs [--check]');
  const output = render();
  if (process.argv.includes('--check')) {
    requireThat(read('01-atividades-gerais.md') === output, 'Documento geral desatualizado. Execute node scripts/gerar-atividades.mjs');
    console.log('Verificado: 93 IDs; 66 fichas de execução; 27 decisões; 228 casos individuais; 45 integrados; seis recortes TEC; links e compilado consistentes.');
  } else {
    fs.writeFileSync(path.join(base, '01-atividades-gerais.md'), output);
    console.log('Documento geral atualizado. Fontes, identificadores, casos e referências validados.');
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
