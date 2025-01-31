#!/usr/bin/env node

import { program } from 'commander';
import parseFile from '../src/fileParser.js';
import diffFiles from '../src/diffFiles.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .usage('[options] <filepath1> <filepath2>')
  // .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .option('-h, --help', 'output usage information')
  .argument('<filepath1>', 'path to file 1')
  .argument('<filepath2>', 'path to file 2')
  .action((filePath1, filePath2) => {
    const file1 = parseFile(filePath1);
    const file2 = parseFile(filePath2);

   console.log(diffFiles(file1, file2));
  });

// eslint-disable-next-line no-undef
program.parse(process.argv);

if (program.opts().help) {
  program.outputHelp();
}
