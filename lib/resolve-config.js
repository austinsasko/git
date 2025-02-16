const {isNil, castArray} = require('lodash');

module.exports = ({assets, message, forcePush}) => ({
  assets: isNil(assets)
    ? ['CHANGELOG.md', 'package.json', 'package-lock.json', 'npm-shrinkwrap.json']
    : assets
    ? castArray(assets)
    : assets,
  message,
  forcePush: isNil(forcePush) ? false : forcePush,
});
