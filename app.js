const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello! This Node.js app is deployed on AWS Elastic Beanstalk.');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
