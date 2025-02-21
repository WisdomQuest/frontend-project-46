import _ from 'lodash';

const createIndent = (depth, shiftingLeft = -2) =>
  ' '.repeat(depth * 4 + shiftingLeft);

const stringify = (data, depth) => {
  const indent = createIndent(depth);
  const lines = Object.entries(data).map(([key, value]) => {
    if (_.isPlainObject(value)) {
      return `${indent}  ${key}: {\n${stringify(
        value,
        depth + 1
      )}\n${createIndent(depth, 0)}}`;
    }
    return `${indent}  ${key}: ${value}`;
  });
  return lines.join('\n');
};

const formatValue = (value, depth) => {
  if (_.isPlainObject(value)) {
    return `{\n${stringify(value, depth)}\n${createIndent(depth, -4)}}`;
  }
  return value;
};

const formatStylish = (data, depth = 1) => {
  const indent = createIndent(depth);
  const formattedLines = data.map((elem) => {
    const { name, condition, value, keyOld, keyNew, children } = elem;

    switch (condition) {
      case 'plus':
        return `${indent}+ ${name}: ${formatValue(value, depth + 1)}`;
      case 'minus':
        return `${indent}- ${name}: ${formatValue(value, depth + 1)}`;
      case 'dash':
        return `${indent}  ${name}: ${value}`;
      case 'changed':
        return `${indent}- ${name}: ${formatValue(
          keyOld,
          depth + 1
        )}\n${indent}+ ${name}: ${formatValue(keyNew, depth + 1)}`;
      case 'unchanged':
        return `${indent}  ${name}: ${formatStylish(children, depth + 1)}`;
      default:
        return '';
    }
  });
  const result = `{\n${formattedLines.join('\n')}\n${createIndent(depth, -4)}}`;
  return result;
};

export default formatStylish;
