import { copyFile, mkdir, readdir } from 'node:fs/promises';
import { dirname, extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = join(root, 'dist');
const publicFiles = [
  'index.html', 'estudos.html', 'politica-privacidade.html',
  'admin.html', 'santuario.html', 'imprimir-velas.html', 'relatorio-velas.html',
  'app.js', 'style.css', 'site-ui.js', 'site-ui.css',
  'agendamento.js', 'agendamento.css', 'estudos.js', 'estudos.css', 'estudos-guia.js',
  'manifest.json', 'sw.js', 'robots.txt', 'sitemap.xml', '_headers', '_redirects',
];

async function filesIn(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await filesIn(path));
    else if (entry.isFile()) files.push(path);
    else throw new Error(`Arquivo especial não permitido: ${relative(root, path)}`);
  }
  return files;
}

for (const asset of await filesIn(join(root, 'assets'))) {
  if (!['.png', '.jpg', '.jpeg', '.webp', '.svg', '.mp4', '.ico'].includes(extname(asset).toLowerCase())) {
    throw new Error(`Revise o arquivo antes de publicar: ${relative(root, asset)}`);
  }
  publicFiles.push(relative(root, asset));
}

await mkdir(output, { recursive: true });
const expected = new Set(publicFiles);
for (const file of await filesIn(output)) {
  if (!expected.has(relative(output, file))) {
    throw new Error(`A pasta dist contém um arquivo fora da publicação: ${relative(output, file)}`);
  }
}
for (const file of publicFiles) {
  const destination = join(output, file);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(join(root, file), destination);
}
console.log(`Publicação preparada: ${publicFiles.length} arquivos em dist.`);
