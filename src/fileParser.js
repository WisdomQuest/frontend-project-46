import fs from 'fs';
import path from 'path';
import { cwd } from 'node:process';
import yaml from 'js-yaml';

const getParserFunction = (fileName) => {
  const format = path.extname(fileName);
  if (format === '.yml' || format === '.yaml') {
    return yaml.load;
  }
  if (format === '.json') {
    return JSON.parse;
  }
  throw new Error(`не найдено расширение файла: ${fileName} `);
};

const fileParser = (filePath) => {
  const absolutePath = path.resolve(cwd(), filePath);
  const extensionFunc = getParserFunction(filePath);
  const data = fs.readFileSync(absolutePath, 'utf-8');

  return extensionFunc(data);
};

export default fileParser;
