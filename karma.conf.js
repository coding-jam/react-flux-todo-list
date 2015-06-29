module.exports = function(config) {
  config.set({

    basePath:'',

    frameworks: ['jspm','jasmine'],
    
    files: [
    ],

    preprocessors: {
      'src/**/*.js': ['babel'],
      'tests/**/*.js': ['babel']
    },

    jspm: {
        loadFiles: ['tests/**/*.js'],
        serveFiles: [
            'src/**/*.js'
        ]
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  })
}
