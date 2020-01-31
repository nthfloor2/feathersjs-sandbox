// Initializes the `xero-callback` service on path `/xero-callback`
const { XeroCallback } = require('./xero-callback.class');
const hooks = require('./xero-callback.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/xero-callback', new XeroCallback(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('xero-callback');

  service.hooks(hooks);
};
