
// GET render/url
exports.url = function(req, res){      
    
    // dependencies
    var path = require('path');
    var childProcess = require('child_process');
    
    // paths    
    var url = 'http://' + req.param('url');        
    var file = path.normalize(__dirname + '/../public/images/' + req.param('file'));        
    var script = path.join(__dirname, 'render.phantom.js');
    
    //todo: validate paths
    
    // options                                    
    var width = req.param('width') || 1680;
    var height = req.param('height') || 1050;
    var delay = req.param('delay') || 1000;
        
    console.log('url:' + url + ', file:' + path.basename(file) + ', width:' + width + ', height:' + height + ', delay:' + delay);    
        
    // args
    var args = [script, url, file, width, height, delay];

    // exec process    
    childProcess.execFile('phantomjs', args, function(err, stdout, stderr) {
        
        //todo: handle errors
        
        if (err !== null) 
            console.log('error:' + err);
        else        
            console.log(stdout);      
        
        //  return file
        res.sendfile(file);
    });                
};


// POST render/html
exports.html = function(req, res){      
    console.log(req.body);      
    res.send(req.body);    
};
