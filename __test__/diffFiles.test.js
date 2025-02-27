/* eslint-disable no-undef */
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectFormatJson = readFile('expectDiffFormatJson.txt');
const expectFormatPlain = readFile('expectDiffFormatPlain.txt');
const expectFormatStylish = readFile('expectDiffFormatStylish.txt');

const file1Json = '__fixtures__/file1.json';
const file2Json = '__fixtures__/file2.json';
const file1Yaml = '__fixtures__/file1.yaml';
const file2Yaml = '__fixtures__/file2.yaml';

test('compareFilesJsonFormatStylish', () => {
  expect(genDiff(file1Json, file2Json)).toEqual(expectFormatStylish);
});

test('compareFilesYamlFormatStylish', () => {
  expect(genDiff(file1Yaml, file2Yaml, 'stylish')).toEqual(expectFormatStylish);
});

test('compareFilesJsonFormatPlain', () => {
  expect(genDiff(file1Yaml, file2Json, 'plain')).toEqual(expectFormatPlain);
});

test('compareFilesFormatJson', () => {
  expect(genDiff(file1Yaml, file2Yaml, 'json')).toEqual(expectFormatJson);
});
