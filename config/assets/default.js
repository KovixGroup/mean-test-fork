'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/bootstrap/dist/css/bootstrap.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.css'
      ],
      js: [
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/angular2/bundles/router.dev.js'
      ],
      tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'src/*/client/css/*.css'
    ],
    less: [
      'src/*/client/less/*.less'
    ],
    sass: [
      'src/*/client/scss/*.scss'
    ],
    js: [
      'public/dist/application.js',
    ],
    ts:[
     // 'modules/core/client/app/config.ts',
      'src/client/**/**.ts',
     // 'modules/*/client/*.ts',
     // 'modules/*/client/**/*.ts'
    ],
    views: ['src/client/**/**/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: 'gruntfile.js',
    gulpConfig: 'gulpfile.js',
    allJS: ['server.js', 'config/**/*.js', 'src/server/*/**/*.js'],
    models: 'src/server/*/models/**/*.js',
    routes: ['src/server/!(core)/routes/**/*.js', 'src/server/core/routes/**/*.js'],
    sockets: 'src/server/*/sockets/**/*.js',
    config: 'src/server/*/config/*.js',
    policies: 'src/server/*/policies/*.js',
    views: 'src/server/*/views/*.html'
  }
};
