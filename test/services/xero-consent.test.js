const app = require('../../src/app');

describe('\'xero-consent\' service', () => {
  it('registered the service', () => {
    const service = app.service('xero-consent');
    expect(service).toBeTruthy();
  });
});
