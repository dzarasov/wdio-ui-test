exports.config = {
    specs: [
        __dirname + '/specs/*.spec.js'
    ],
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    waitforTimeout: 150000,
    connectionRetryTimeout: 90000,
    framework: 'mocha',
    reporters: ['dot'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 30000
    }
}
