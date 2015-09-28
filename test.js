'use strict'

var load = require('./')
var koa = require('koa')
var request = require('supertest')
var resolve = require('path').resolve
var dir = resolve(__dirname, 'example', 'resources')

describe('/ping', function () {
  it('is attached and responding', function (done) {
    var app = koa()
    load(dir, app)
    request(app.listen()).get('/ping').expect(200, 'pong', done)
  })
})

describe('/status', function () {
  it('is attached and responding', function (done) {
    var app = koa()
    load(dir, app)
    request(app.listen()).get('/status').expect(204, done)
  })

  it('is not loaded when skipped', function (done) {
    var app = koa()
    load(dir, app, ['status'])
    request(app.listen()).get('/status').expect(404, done)
  })
})

describe('/users', function () {
  it('is attached and responding', function (done) {
    var app = koa()
    load(dir, app)
    request(app.listen()).get('/users').expect(200, 'someuser', done)
  })

  describe('/users/history', function () {
    it('is attached and responding', function (done) {
      var app = koa()
      load(dir, app)
      request(app.listen()).get('/users/history').expect(200, 'somehistory', done)
    })
  })
})
