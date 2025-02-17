export default (data, parentPath = '') => {
  return parentPath ? `${parentPath}.${data.name}` : data.name;
};
