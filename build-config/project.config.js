'use strict';

module.exports = {

  build: {
    less: {
      enabled: false
    },
    sass: {
        enabled: true
    },
    bless: {
      enabled: false
    },
    spec: {
      runInPrepare: false
    },
    e2e: {
      runInDev: false,
      runInDist: false
    },
    server: {
      runInDist: true
    }
  },

  app: {
    files: {
      templates2js: [ ],
      translations: [ ],
      translations2js: [ ]
    }
  },

  vendor: {
    files: {
      js: [
        'angular/angular.js',
        'jquery/dist/jquery.js',
        'angular-bootstrap/ui-bootstrap.js',
        'angular-animate/angular-animate.js',
        'angular-sanitize/angular-sanitize.js',
        'angular-ui-router/release/angular-ui-router.js',
        'ionic/release/js/ionic.js',
        'ionic/release/js/ionic-angular.js'
      ],
      js_mock: [
      ],
      js_spec: [
      ],
      js_e2e: [
      ],
      css: [
      'angular-bootstrap/bootstrap.css'
      ],
      assets: [
        'ionic/release/fonts/*'
      ]
    }
  }
};
