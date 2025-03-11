import formatStylish from './styllish.js';
import formatPlain from './plain.js';
import formatJson from './json.js';

const format = (getDIffFiles, stile) => {
  switch (stile) {
    case 'stylish':
      return formatStylish(getDIffFiles);
    case 'plain':
      return formatPlain(getDIffFiles);
    case 'json':
      return formatJson(getDIffFiles);
    default:
      console.error(`Unknown format: ${format}`);
      return null;
  }
};

export default format;
