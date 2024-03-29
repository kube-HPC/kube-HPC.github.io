/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

var path = require('path');
var express = require('express');
var watch = require('./watch');
var config = require('../config/main/config.base');
var { port } = config;
var pwd = process.env.PWD;
var buildDir = process.env.npm_package_site_build || './_build';

var FILE_SERVE_ROOT = path.resolve(pwd, buildDir);

var app = express().use(express.static(FILE_SERVE_ROOT))

setTimeout(() => {
  app.listen(port, () => {
    watch().then(() => {
      console.log(`Open http://localhost:${port}/`);
      console.log('FILE_SERVE_ROOT:' + FILE_SERVE_ROOT);
    }).catch(error => console.error(error.stack || error));
  });
}, 1000);