const app = require('../../src/app');

describe('\'xero\' service', () => {
  it('registered the service', () => {
    const service = app.service('xero');
    expect(service).toBeTruthy();
  });
});
