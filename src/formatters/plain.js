import _ from 'lodash';
import getPath from '../getPath.js';

const formatValue = (value) => {
  if (_.isNull(value) || _.isBoolean(value)|| _.isNumber(value)) {
    return value;
  } else if(_.isObject(value)) {
    return `[complex value]`;
  }
  return `'${value}'`;
};

const formatPlain = (data, parentPath = '') => {
  const lines = data.map((elem) => {
    const { condition, children } = elem;
    const currentPath = getPath(elem, parentPath);

    switch (condition) {
      case 'plus':
        return `Property '${currentPath}' was added with value: ${formatValue(
          elem.value
        )}`;
      case 'minus':
        return `Property '${currentPath}' was removed`;
      case 'changed':
        return `Property '${currentPath}' was updated. From ${formatValue(elem.keyOld)} to ${formatValue(elem.keyNew)}`;
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
