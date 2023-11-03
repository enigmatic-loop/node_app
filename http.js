const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/'){
    res.end('Welcome!')
  } 
  if (req.url == '/about') {
    res.end('I am a bloop')
  } else {
    res.end(`
      <h1>Oops!<h1>
      <p>We can't seem to find the link you're looking for<p>
      <a href="/">back home<a>
    `)
  }
})

server.listen(3000);