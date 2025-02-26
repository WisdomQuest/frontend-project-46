/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import genDiff from '../src/formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) =>
  fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectFormatJson = readFile('expectDiffFormatJson.txt');
const expectFormatPlain = readFile('expectDiffFormatPlain.txt');
const expectFormatStylish = readFile('expectDiffFormatStylish.txt');

test('compareFilesJsonFormatStylish', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(
    expectFormatStylish
  );
});

test('compareFilesYamlFormatStylish', () => {
  expect(
    genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'stylish')
  ).toEqual(expectFormatStylish);
});

test('compareFilesJsonFormatPlain', () => {
  expect(
    genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.json', 'plain')
  ).toEqual(expectFormatPlain);
});

test('compareFilesFormatJson', () => {
  expect(
    genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'json')
  ).toEqual(expectFormatJson);
});
