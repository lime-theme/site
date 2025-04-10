const { resolve: resolvePath } = require('path');
const { existsSync } = require('fs');

const { resolveRootPath, ensureDirExists, getLocalDataRoot, getLocalDocRoot } = require('../helper');
const { /* your generators */ } = require('../generator');

module.exports = {
  execute: dataSource => {
    const srcPath = resolvePath(resolveRootPath(), dataSource || process.env.KSIO_DS);

    if (!existsSync(srcPath)) {
      return;
    }

    [getLocalDataRoot(), getLocalDocRoot()].forEach(distPath => ensureDirExists(distPath, true));

    const innerSourceRootPath = resolvePath(resolveRootPath(), 'data');

    const outerSourceRootPath = resolvePath(srcPath, 'data');
    const sharedRootPath = resolvePath(srcPath, 'shared');

    const generators = {
      /* your generators */
    };

    Object.values(generators).forEach(generator => generator());
  },
};
