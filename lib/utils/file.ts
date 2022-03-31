import fs from 'fs';

export function listFiles(dir: string) {
  return fs.readdirSync(dir);
}

export function removeExtension(str: string, delimiter?: string) {
  const i = str.lastIndexOf(delimiter ?? '.');

  return i > -1 ? str.slice(0, i) : str;
}
