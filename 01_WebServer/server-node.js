const http = require('http')

const hostname = '127.0.0.1';
const port = 5500;

const server = http.createServer((req, res) => {res.statusCode = 200
  res.setHeader('content-Type', 'text/plain')
  res.end("hello ice tea")
})

server.listen(port, hostname, () => {
  console.log(`server is listening at http://${hostname}: ${port}`)
})