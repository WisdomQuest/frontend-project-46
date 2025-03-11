import fileParser from '../fileParser.js';
import diffFiles from '../diffFiles.js';
import format from './format.js';

const genDiff = (filePath1, filePath2, stile = 'stylish') => {
  const file1 = fileParser(filePath1);
  const file2 = fileParser(filePath2);
  const getDIffFiles = diffFiles(file1, file2);

  return format(getDIffFiles, stile);
};

export default genDiff;
