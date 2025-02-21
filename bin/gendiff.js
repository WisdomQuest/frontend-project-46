#!/usr/bin/env node

import { program } from 'commander';
import { chooseFormat } from '../src/formatters/index.js';
program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .usage('[options] <filepath1> <filepath2>')
  // .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format', 'stylish')
  .option('-h, --help', 'output usage information')
  .argument('<filepath1>', 'path to file 1')
  .argument('<filepath2>', 'path to file 2')
  .action((filePath1, filePath2, options) => {
    console.log(chooseFormat(filePath1, filePath2, options.format));
  });

// eslint-disable-next-line no-undef
program.parse(process.argv);

if (program.opts().help) {
  program.outputHelp();
}
