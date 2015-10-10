'use strict';

var PATHS = {
  src: './source',
  dest: './public'
};

module.exports = {

  // True to use Browser Sync as server.
  // False to use your own server.
  devModeStatic: false,

  serverPort: 3000,

  scripts: {
    src: PATHS.src + '/scripts/**/*.js',
    dest: PATHS.dest + '/js/'
  },

  images: {
    src: PATHS.src + '/images/**/*.{jpeg,jpg,png}',
    dest: PATHS.dest + '/images/'
  },

  styles: {
    src: PATHS.src + '/styles/**/*.scss',
    dest: PATHS.dest + '/css/'
  },

  sourceDir: PATHS.src + '/',

  buildDir: PATHS.dest + '/'

};
