'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-server-dom-webpack-writer.browser.server.production.min.js');
} else {
  module.exports = require('./cjs/react-server-dom-webpack-writer.browser.server.development.js');
}
