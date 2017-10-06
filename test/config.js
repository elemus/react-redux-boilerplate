const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

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
global.HTMLElement = jsdom.window.HTMLElement;
