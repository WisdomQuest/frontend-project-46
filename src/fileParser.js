import fs from 'fs';
import path from 'path';
import { cwd } from 'node:process';

const parseFile = (filePath) => {
  const absolutePath = path.resolve(cwd(), filePath);
  const data = fs.readFileSync(absolutePath);
  return JSON.parse(data);
};

export default parseFile;