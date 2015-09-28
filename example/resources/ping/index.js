'use strict'

module.exports = function (app) {
  /**
   * route handler for /ping.
   */

  app.use(function *(next) {
    yield* next
    if (this.path === '/ping' && this.method === 'GET') this.body = 'pong'
  })
}
