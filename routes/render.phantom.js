
var system = require('system');
var page = require('webpage').create();

var url = system.args[1];
var file = system.args[2];
var width = system.args[3] || 1024;
var height = system.args[4] || 768;
var delay = system.args[5] || 1000;

page.viewportSize = { width: width, height: height };

page.open(url, function() {
    setTimeout(function(){    
        page.render(file);        
        phantom.exit();        
    }, delay);    
});