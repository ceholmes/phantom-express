
var system = require('system');
var page = require('webpage').create();

var url = system.args[1];
var file = system.args[2];
var width = system.args[3];
var height = system.args[4];
var delay = system.args[5] || 3000;

console.log('url:' + url);

page.viewportSize = { width: width, height: height };

page.open(url, function() {
    setTimeout(function(){    
        page.render(file);
        console.log('render complete');
        phantom.exit();        
    }, delay);
    
});