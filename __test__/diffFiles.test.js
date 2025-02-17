/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import compareFiles from '../src/diffFiles.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import parseFile from '../src/fileParser.js';
import formatStylish from '../src/formats/styllish.js';
import formatPlain from '../src/formats/plain.js';
import formatJson from '../src/formats/json.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), 'utf-8');

const prepareFiles = (file1, file2) => {
  const parsedFile1 = parseFile(getFixturePath(file1));
  const parsedFile2 = parseFile(getFixturePath(file2));
  return compareFiles(parsedFile1, parsedFile2);
};

let diffFilesJson;
let diffFilesYaml;
beforeEach(() => {
   diffFilesJson = prepareFiles('file1.json', 'file2.json');
   diffFilesYaml = prepareFiles('file1.yaml', 'file2.yaml');
});

test('compareFilesJsonFormatStylish', () => {
  const diffFilesFormatStylish = readFile('expectDiffFormatStylish.txt');
  expect(formatStylish(diffFilesJson)).toEqual(diffFilesFormatStylish);
});

test('compareFilesYamlFormatStylish', () => {
  const diffFilesFormatStylish = readFile('expectDiffFormatStylish.txt');
  expect(formatStylish(diffFilesYaml)).toEqual(diffFilesFormatStylish);
});

test('compareFilesJsonFormatPlain', () => {
  const diffFilesFormatPlain = readFile('expectDiffFormatPlain.txt');
  expect(formatPlain(diffFilesJson)).toEqual(diffFilesFormatPlain);
});

// test('compareFilesYamlFormatStylishPlain', () => {
//   const diffFilesFormatPlain = readFile('expectDiffFormatPlain.txt');
//   expect(formatPlain(diffFilesYaml)).toEqual(diffFilesFormatPlain);
// });

test('compareFilesFormatJson', () => {
  const diffFilesFormatPlain = readFile('expectDiffFormatJson.txt');
  expect(formatJson(diffFilesJson)).toEqual(diffFilesFormatPlain);
});
