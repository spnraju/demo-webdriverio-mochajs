const { config } = require('./wdio.conf');

exports.config = {
  ...config,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'firefox',
      'moz:firefoxOptions': {
        args: ['-headless'],
      },
    },
  ],
};
