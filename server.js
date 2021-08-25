var http = require('http');

var server = http.createServer(function(req, res) {

    if(req.url == '/'){
        res.setHeader("Content-type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200);
        let dataObject = { id: 123, name: 'Adam', email: 'someone@email.com' };
        let data = JSON.stringify(dataObject);
        res.end(data);
    }
    else if(req.url == '/student'){
        res.setHeader('Content-type', 'text/html');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200);
        let page = '<h1>Hello World, Student!</h1>';
        res.end(page);
    }
    
})

server.listen(8080, function() {
    console.log("Server is running at 3000");
})