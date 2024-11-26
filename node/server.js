const http = require('http');
const fs = require('fs');
const path = require('path');

// Create server
const server = http.createServer((req, res) => {
  // Serve the HTML file
  if (req.url === '/' || req.url === '/index.html') {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

