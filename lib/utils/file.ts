import fs from 'fs';
import path from 'path';

export function listFiles(dir: string) {
  return fs.readdirSync(dir);
}

export function getFileContents(dir: string, file: string) {
  return fs.readFileSync(path.join(dir, file), 'utf8');
}

export function removeExtension(str: string, delimiter?: string) {
  const i = str.lastIndexOf(delimiter ?? '.');

  return i > -1 ? str.slice(0, i) : str;
}
