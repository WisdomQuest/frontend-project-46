import _ from 'lodash';

function compareFiles(file1, file2) {
  const key1 = Object.keys(file1);
  const key2 = Object.keys(file2);
  const unionKeys = _.union(key1, key2);
  const temp = _.sortBy(unionKeys).map((key) => {
    if (!file2[key]) {
      return `  - ${key}: ${file1[key]}`;
    }
    if (!file1[key]) {
      return `  + ${key}: ${file2[key]}`;
    }
    if (file2[key] === file1[key]) {
      return `    ${key}: ${file1[key]}`;
    }
    return `  - ${key}: ${file1[key]}\n  + ${key}: ${file2[key]}`;
  });
  return `{\n${temp.join('\n')}\n}`;
}

export default compareFiles;

// gendiff filepath1.json filepath2.json

// {
//   - follow: false
//     host: hexlet.io
//   - proxy: 123.234.53.22
//   - timeout: 50
//   + timeout: 20
//   + verbose: true
// }

// {
//   "host": "hexlet.io",
//   "timeout": 50,
//   "proxy": "123.234.53.22",
//   "follow": false
// }

// {
//   "timeout": 20,
//   "verbose": true,
//   "host": "hexlet.io"
// }
