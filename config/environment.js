'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'landing-geek',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    i18n: {
        defaultLocale: 'es',
        availableLocales: ['en', 'es'],
    },
    firebase: {
		apiKey: "AIzaSyDOUSLEBR3lZ6eTN98kddJMD8XI4YvgmAQ",
		authDomain: "geekdevelopers-8c235.firebaseapp.com",
		databaseURL: "https://geekdevelopers-8c235.firebaseio.com",
		projectId: "geekdevelopers-8c235",
		storageBucket: "geekdevelopers-8c235.appspot.com",
		messagingSenderId: "147301006663"
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
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
