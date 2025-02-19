import _ from 'lodash';
import getPath from '../getPath.js';

const checkBolleanNull = (value) => {
  if (_.isNull(value) || _.isBoolean(value)|| _.isNumber(value)) {
    return value;
  }
  return `'${value}'`;
};

const getValue = (data) => {
  if (data.condition === 'changed') {
    return `${
      _.isObject(data.keyOld)
        ? `[complex value]`
        : `${checkBolleanNull(data.keyOld)}`
    } to ${
      _.isObject(data.keyNew)
        ? `[complex value]`
        : `${checkBolleanNull(data.keyNew)}`
    }`;
  } else if (_.isObject(data.value)) {
    return `[complex value]`;
  }

  return checkBolleanNull(data.value);
};

const formatPlain = (data, parentPath = '') => {
  const lines = data.map((elem) => {
    const { condition, children } = elem;
    const currentPath = getPath(elem, parentPath);

    switch (condition) {
      case 'plus':
        return `Property '${currentPath}' was added with value: ${getValue(
          elem
        )}`;
      case 'minus':
        return `Property '${currentPath}' was removed`;
      case 'changed':
        return `Property '${currentPath}' was updated. From ${getValue(elem)}`;
      case 'unchanged':
        return `${formatPlain(children, currentPath)}`;
      default:
        return '';
    }
  });
  const result = _.compact(lines);
  return result.join('\n');
};

export default formatPlain;
