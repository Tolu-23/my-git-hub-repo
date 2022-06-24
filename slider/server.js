const http = require('http');

const db = [
    {name: 'ade', firstName: 'Adetona'}
];
const server = http.createServer((req, res) => {
    //console.log(req)
    //add header
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' 
       })
    if(req.url.includes('name')) {
        res.end(JSON.stringify({name: 'ade'}));
    }else {console.log(req.headers)
        res.end(JSON.stringify({age: '2'}));
    }
    //write aresponse
    
}).listen(3000, () => console.log('server started on 3000'));