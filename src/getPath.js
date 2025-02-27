export default (data, parentPath = '') => (parentPath ? `${parentPath}.${data.name}` : data.name);
