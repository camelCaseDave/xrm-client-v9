const wallabyWebpack = require('wallaby-webpack');
const webpackPostprocessor = wallabyWebpack({});

module.exports = function (wallaby) {
  return {
    files: [
      {pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false},
      { pattern: 'lib/**/*.js', load: false }
    ],
    tests: [
      { pattern: 'test/**/*.js', load: false }
    ],
    compilers: {
      '**/*.js': wallaby.compilers.babel({ 'presets': ['es2015'] })
    },
    postprocessor: webpackPostprocessor,
    setup: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
