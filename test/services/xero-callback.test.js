const app = require('../../src/app');

describe('\'xero-callback\' service', () => {
  it('registered the service', () => {
    const service = app.service('xero-callback');
    expect(service).toBeTruthy();
  });
});
