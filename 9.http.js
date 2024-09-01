const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hello World')
})

server.listen(0, () => {
  console.log(`Server listening on http://localhost:${server.address().port}`)
})
