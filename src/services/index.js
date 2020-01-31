const users = require('./users/users.service.js');
const messages = require('./messages/messages.service.js');
const xero = require('./xero/xero.service.js');
const xeroConsent = require('./xero-consent/xero-consent.service.js');
const xeroCallback = require('./xero-callback/xero-callback.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(messages);
  app.configure(xero);
  app.configure(xeroConsent);
  app.configure(xeroCallback);
};
