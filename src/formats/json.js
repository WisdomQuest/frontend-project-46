import _ from 'lodash';
import getPath from '../getPath.js';

const checkBolleanNullNumber = (value) => {
  if (_.isNull(value) || _.isBoolean(value) || _.isNumber(value)) {
    return value;
  }
  return `"${value}"`;
};

const getValue = (elem) => {
  if (elem.keyOld || elem.keyNew) {
    return `"oldValue": ${formatValue(elem.keyOld)}, "newValue": ${formatValue(elem.keyNew)}`;
  }
  return `"value": ${formatValue(elem.value)}`;
};

const formatValue = (value) => {
  if (_.isPlainObject(value)) {
    return JSON.stringify(value);
  }
  return checkBolleanNullNumber(value);
};

const formatJson = (data, parentPath = '') => {
  const iner = (data, parentPath) => data
    .filter((elem) => elem.condition !== 'dash')
    .map((elem) => {
      const { condition, children } = elem;
      const currentPath = getPath(elem, parentPath);
      if (condition === 'unchanged') {
        return `${iner(children, currentPath)}`;
      }
      return `{"name": "${currentPath}", ${getValue(elem)}, "condition": "${condition}"}`;
    });
  const result = iner(data, parentPath).join(',');
  return `[${result}]`;
};

export default formatJson;