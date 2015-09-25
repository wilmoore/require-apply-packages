'use strict'

module.exports = function (app) {
  /**
   * route handler for /users.
   */

  app.use(function *(next) {
    yield* next
    if (this.path === '/users' && this.method === 'GET') this.body = 'someuser'
  })
}
