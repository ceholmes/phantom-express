
// GET render/url
exports.url = function(req, res){      
    
    var url = req.param('url');
    var file = req.param('file');
            
    console.log('url=' + url + ', file=' + file);
    res.send('url=' + url + ', file=' + file);    
};


// POST render/html
exports.html = function(req, res){      
    console.log(req.body);      
    res.send(req.body);    
};
