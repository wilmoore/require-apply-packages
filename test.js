'use strict';

var load = require('./');
var test = require('tape');
var koa = require('koa');
var path = require('path');
var request = require('supertest');
var dir = path.resolve(__dirname, "example", "resources");

describe('/ping', function () {

  it('is attached and responding', function (done) {
    var app = koa();
    load(dir, app);
    request(app.listen()).get('/ping').expect(200, 'pong', done);
  });

});

describe('/status', function () {

  it('is attached and responding', function (done) {
    var app = koa();
    load(dir, app);
    request(app.listen()).get('/status').expect(204, done);
  });

  it('is not loaded when skipped', function (done) {
    var app = koa();
    load(dir, app, ["status"]);
    request(app.listen()).get('/status').expect(404, done);
  });

});

