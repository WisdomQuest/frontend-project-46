import fileParser from '../fileParser.js';
import diffFiles from '../diffFiles.js';
import formatStylish from './styllish.js';
import formatPlain from './plain.js';
import formatJson from './json.js';

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const file1 = fileParser(filePath1);
  const file2 = fileParser(filePath2);
  const getDIffFiles = diffFiles(file1, file2);

  const output = (() => {
    switch (format) {
      case 'stylish':
        return formatStylish(getDIffFiles);
      case 'plain':
        return formatPlain(getDIffFiles);
      case 'json':
        return formatJson(getDIffFiles);
      default:
        console.error(`Unknown format: ${format}`);
        return null;
    }
  })();

  return output;
};

export default genDiff;
