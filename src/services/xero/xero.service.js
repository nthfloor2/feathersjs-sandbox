// Initializes the `xero` service on path `/xero`
const { Xero } = require('./xero.class');
const createModel = require('../../models/xero.model');
const hooks = require('./xero.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/xero', new Xero(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('xero');

  service.hooks(hooks);
};
