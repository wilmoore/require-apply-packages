'use strict';

module.exports = function (app) {

  /**
   * route handler for /status.
   */

  app.use(function *(next) {
    yield* next;
    if (this.path === '/status' && this.method === 'GET') this.status = 204;
  });

};
