import _ from 'lodash';

function diffFiles(file1, file2) {
  const keys = _.union(Object.keys(file1), Object.keys(file2));
  return _.sortBy(keys).map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];

    if (!_.has(file2, key)) {
      return { name: key, value: value1, condition: 'minus' };
    }
    if (!_.has(file1, key)) {
      return { name: key, value: value2, condition: 'plus' };
    }
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return {
        name: key,
        condition: 'unchanged',
        children: diffFiles(value1, value2),
      };
    }
    if (value1 === value2) {
      return { name: key, value: value1, condition: 'dash' };
    }
    return {
      name: key,
      keyOld: value1,
      keyNew: value2,
      condition: 'changed',
    };
  });
}

export default diffFiles;
