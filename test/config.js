const ignoredExtensions = ['.scss'];

ignoredExtensions.forEach((ext) => {
  require.extensions[ext] = () => null;
});

require('babel-register')();

const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('');

global.window = jsdom.window;
global.document = jsdom.window.document;
global.navigator = {
  userAgent: 'node.js'
};
