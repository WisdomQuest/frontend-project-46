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
        resultObj.oldValue = keyOld;
        resultObj.newValue = newValue;
      } else {
        resultObj.value = value;
      }

      if (children) {
        resultObj.children = iner(children, currentPath);
      }

      return resultObj;
    });

  const result = iner(data, parentPath);
  return JSON.stringify(result);
};

export default formatJson;
