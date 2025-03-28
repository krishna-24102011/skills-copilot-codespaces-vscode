const http = require('http');
const fs = require('fs');
const path = require('path');

// Create web server
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        const filePath = path.join(__dirname, 'comments.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Listen on port 3000
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
