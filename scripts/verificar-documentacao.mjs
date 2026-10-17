import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {markdownFiles, validateFiles} from './documentacao.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
if (process.argv.length > 2) {
  console.error('Uso: node scripts/verificar-documentacao.mjs');
  process.exitCode = 1;
} else {
  const files = markdownFiles(root);
  const errors = validateFiles(files, {root});
  if (errors.length) {
    console.error(errors.join('\n'));
    process.exitCode = 1;
  } else console.log(`Verificado: ${files.length} documentos Markdown; arquivos, imagens, referências e âncoras locais consistentes.`);
}
