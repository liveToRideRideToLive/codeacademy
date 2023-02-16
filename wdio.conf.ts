export const config = {

    specs: [
        './test/**/*.ts'
    ],
    capabilities: [{
        browserName: 'chrome',
        maxInstances: 1,
        "goog:chromeOptions": {args:  ["--window-size=1920,1080"]}
    }],
    framework: 'Jasmine',
    jasmineOpts: {
        defaultTimeoutInterval: 1200000,
    },

    autoCompileOpts: {
        autoCompile: true,
        // for all available options
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        },
    }
}