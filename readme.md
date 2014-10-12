# require-apply-packages

[![Build Status](http://img.shields.io/travis/wilmoore/require-apply-packages.svg)](https://travis-ci.org/wilmoore/require-apply-packages) [![NPM version](http://img.shields.io/npm/v/require-apply-packages.svg)](https://www.npmjs.org/package/require-apply-packages) [![NPM downloads](http://img.shields.io/npm/dm/require-apply-packages.svg)](https://www.npmjs.org/package/require-apply-packages) [![LICENSE](http://img.shields.io/npm/l/require-apply-packages.svg)](LICENSE)

> Requires each main module from packages in a base directory, invoking each exported function with optional parameter(s).

    $ npm install require-apply-packages

## Examples

###### loading a directory of Koa route modules.

> NOTE: loading Koa routes was my initial use-case; however, this module is not tied to koa in any way.

    var load = require('require-apply-packages');
    var path = require('path');
    var skip = [];

    load(path.resolve(__dirname, "app", "resources"), app, skip);

###### defining a Koa `ping` resource module.

    module.exports = function (app) {
      app.get('/ping', function *(next) {
        this.body = 'pong';
      });
    };

## Alternatives

- [require-directory](https://www.npmjs.org/package/require-directory)
- [require-all](https://www.npmjs.org/package/require-all)

## License

  [MIT](LICENSE)

