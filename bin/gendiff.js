#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/formatters/index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .usage('[options] <filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .option('-h, --help', 'output usage information')
  .argument('<filepath1>', 'path to file 1')
  .argument('<filepath2>', 'path to file 2')
  .action((filePath1, filePath2, options) => {
    console.log(genDiff(filePath1, filePath2, options.format));
  });

program.parse();
