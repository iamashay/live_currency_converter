var http = require('http');

function onRequest(request, response) {
    response.writeHead(200, {
        'Content-type': 'text-plain'
    });
    response.write('Hello from Node.');
    response.end();
}

// provess.env.PORT will expand to the name pipe value on App Service
// request --> Frontends (ARR) --> Web Worker (IIS) --> iisnode --> 
//    --named-pipe--> node.exe server.js

http.createServer(onRequest).listen(process.env.PORT || 3000);
console.log('Listening for requests on port ' + (process.env.PORT || 3000));