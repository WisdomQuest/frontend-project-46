import _ from 'lodash';

const createIndent = (depth, shiftingLeft = -2) => ' '.repeat(depth * 4 + shiftingLeft);

const stringify = (value, depth) => {
  const indent = createIndent(depth);

  if (_.isPlainObject(value)) {
    const lines = Object.entries(value).map(([key, val]) => `${indent}  ${key}: ${stringify(val, depth + 1)}`);
    return `{\n${lines.join('\n')}\n${createIndent(depth, -4)}}`;
  }

  return String(value); // Преобразуем в строку для других типов
};

const formatStylish = (data) => {
  const formatStylishRecursive = (elements, depth = 1) => {
    const indent = createIndent(depth);
    const addPrefix = '+ ';
    const deletePrefix = '- ';
    const unchangedPrefix = '  ';

    const formattedLines = elements.map((elem) => {
      const {
        name, condition, value, keyOld, newValue, children,
      } = elem;

      const operationHandlers = {
        add: () => `${indent}${addPrefix}${name}: ${stringify(value, depth + 1)}`,
        delete: () => `${indent}${deletePrefix}${name}: ${stringify(value, depth + 1)}`,
        dash: () => `${indent}${unchangedPrefix}${name}: ${value}`,
        changed: () => `${indent}${deletePrefix}${name}: ${stringify(keyOld, depth + 1)}\n${indent}${addPrefix}${name}: ${stringify(newValue, depth + 1)}`,
        unchanged: () => `${indent}${unchangedPrefix}${name}: ${formatStylishRecursive(children, depth + 1)}`,
      };

      return operationHandlers[condition] ? operationHandlers[condition]() : '';
    });
    return `{\n${formattedLines.join('\n')}\n${createIndent(depth, -4)}}`;
  };

  return formatStylishRecursive(data);
};

export default formatStylish;
