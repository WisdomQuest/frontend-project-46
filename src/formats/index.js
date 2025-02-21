import fileParser from '../fileParser.js';
import diffFiles from '../diffFiles.js';
import formatStylish from './styllish.js';
import formatPlain from './plain.js';
import formatJson from './json.js';

export const chooseFormat = (filePath1, filePath2, format = 'stylish') => {
  const file1 = fileParser(filePath1);
  const file2 = fileParser(filePath2);
  const getDIffFiles = diffFiles(file1, file2);

  let output;
  if (format === 'stylish') {
    output = formatStylish(getDIffFiles);
  } else if (format === 'plain') {
    output = formatPlain(getDIffFiles);
  } else if (format === 'json') {
    output = formatJson(getDIffFiles);
  } else {
    console.error(`Unknown format: ${format}`);
  }

  console.log(output);
  return output;
};
