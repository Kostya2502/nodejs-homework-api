const fs = require('fs').promises

/* eslint-disable */
const isAccessible = path => {
    return fs
        .access(path)
        .then(() => true)
        .catch(() => false);
};

const folderExists = async folder => {
    if (!(await isAccessible(folder))) {
        await fs.mkdir(folder);
    }
};
/* eslint-enable */

module.exports = folderExists
