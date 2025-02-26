import _ from 'lodash';
import getPath from '../getPath.js';

const formatValue = (value) => {
  if (_.isNull(value) || _.isBoolean(value) || _.isNumber(value)) {
    return value;
  } else if (_.isPlainObject(value)) {
    return JSON.stringify(value);
  }
  return `"${value}"`;
};

const getValue = (elem) => {
  if (elem.keyOld || elem.keyNew) {
    return `"oldValue": ${formatValue(elem.keyOld)}, "newValue": ${formatValue(
      elem.keyNew
    )}`;
  }
  return `"value": ${formatValue(elem.value)}`;
};

const formatJson = (data, parentPath = '') => {
  const iner = (items, path) =>
    items
      .filter((elem) => elem.condition !== 'dash')
      .map((elem) => {
        const { condition, children } = elem;
        const currentPath = getPath(elem, path);
        if (condition === 'unchanged') {
          return `${iner(children, currentPath)}`;
        }
        return `{"name": "${currentPath}", ${getValue(
          elem
        )}, "condition": "${condition}"}`;
      });
  const result = iner(data, parentPath).join(',');
  return `[${result}]`;
};

export default formatJson;
