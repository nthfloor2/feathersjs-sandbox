// Initializes the `xero-consent` service on path `/xero-consent`
const { XeroConsent } = require('./xero-consent.class');
const hooks = require('./xero-consent.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/xero-consent', new XeroConsent(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('xero-consent');

  service.hooks(hooks);
};
