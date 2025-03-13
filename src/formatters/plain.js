import _ from 'lodash';
import getPath from '../getPath.js';

const formatValue = (value) => {
  if (_.isNull(value) || _.isBoolean(value) || _.isNumber(value)) {
    return value;
  }
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return `'${value}'`;
};

const formatPlain = (data) => {
  const formatRecursive = (childrenData, parentPath = '') => {
    if (!Array.isArray(childrenData)) {
      return '';
    }
    const lines = childrenData.map((elem) => {
      const {
        condition, children, newValue, value, keyOld,
      } = elem;
      const currentPath = getPath(elem, parentPath);

      const messages = {
        add: `Property '${currentPath}' was added with value: ${formatValue(
          value,
        )}`,
        delete: `Property '${currentPath}' was removed`,
        changed: `Property '${currentPath}' was updated. From ${formatValue(
          keyOld,
        )} to ${formatValue(newValue)}`,
        unchanged: formatRecursive(children, currentPath),
      };

      return messages[condition];
    });
    const result = _.compact(lines);
    return result.join('\n');
  };

  return formatRecursive(data);
};

export default formatPlain;
