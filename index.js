'use strict';

/**
 * imports.
 */

let find = require('fs-finder');
let path = require('path');

/**
 * exports.
 */

module.exports = packages;

/**
 * Require the main module of each package in a base directory, invoking the exported function
 * with the parameter provided.
 *
 * Example:
 *
 *    let app = koa();
 *    load.modules(path.resolve(__dirname, "app", "resources"), app);
 *
 * @param {string} dir
 * base directory.
 *
 * @param {Application} app
 * KOA application instance.
 */

function packages(dir, arg, skip) {
  let modules = find.in(dir).findDirectories();

  modules.forEach(function (mod) {
    if (skipped(skip, mod)) return;
    require(mod)(arg);
  });
}

/**
 * Whether package should be skipped.
 *
 * @param {array} skip
 * list of skipped packages.
 *
 * @param {string} mod
 * module path.
 */

function skipped(skip, mod) {
  var name = path.basename(mod);
  skip = skip || [];
  return !!~skip.indexOf(name);
}

