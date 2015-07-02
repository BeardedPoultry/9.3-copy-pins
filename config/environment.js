/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'pins',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      applicationId: 'SjkY6GSUQfAhwyMrzJxpbEGtdk9SLuYI549Jq05t',
      restApiId: 'bOilP84PiqPuMQvIJgAeEJ7QYrD2g8mNsVBtZPoP'
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self'",
      'img-src': "'self'",
      'media-src': "'self'"
    },
    'simple-auth': {
      routeAfterAuthentication: 'landing'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
