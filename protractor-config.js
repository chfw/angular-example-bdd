exports.config = {
	baseUrl: 'http://localhost:9000',
    framework: 'cucumber',
    rootElement: 'body',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
       'browserName': 'chrome'
    },
    specs: ['features.coffee/*.feature'],
    cucumberOpts: { format: 'pretty' },
    onPrepare: function(){
        global.By = global.by;
    }
};
