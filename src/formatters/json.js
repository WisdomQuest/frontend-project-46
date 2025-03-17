import getPath from '../getPath.js';

const formatJson = (data, parentPath = '') => {
  const iner = (items, path) => items
    .filter((elem) => elem.condition !== 'dash')
    .map((elem) => {
      const {
        condition, children, keyOld, newValue, value,
      } = elem;
      const currentPath = getPath(elem, path);

      const resultObj = {
        name: currentPath,
        condition,
      };

      if (keyOld !== undefined || newValue !== undefined) {
        return {
          ...resultObj,
          oldValue: keyOld,
          newValue,
          ...(children && { children: iner(children, currentPath) }),
        };
      }
      return {
        ...resultObj,
        value,
        ...(children && { children: iner(children, currentPath) }),
      };
    });

  const result = iner(data, parentPath);
  return JSON.stringify(result);
};

export default formatJson;
