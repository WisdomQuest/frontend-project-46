import fs from 'fs';
import path from 'path';
import compareFiles from '../src/diffFiles.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import parseFile from '../src/fileParser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), 'utf-8');

test('compareFiles',()=>{
const diffFiles = readFile('expectDiffFiles.txt')
const file1 = parseFile(getFixturePath('file1.json'));
const file2 = parseFile(getFixturePath('file2.json'));
  expect(compareFiles(file1,file2)).toEqual(diffFiles);
})
