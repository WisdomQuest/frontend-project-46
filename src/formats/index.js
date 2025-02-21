import parseFile from '../src/fileParser.js';
import diffFiles from '../src/diffFiles.js';
import formatStylish from '../src/formats/styllish.js';
import formatPlain from '../src/formats/plain.js';
import formatJson from '../src/formats/json.js';

export const chooseFormat = (filePath1, filePath2, format)=>{
const file1 = parseFile(filePath1);
const file2 = parseFile(filePath2);
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
}