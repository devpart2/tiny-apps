const express = require('express')

const app = express()
app.use(express.static('public'))

app.get('/get-counter', function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  })
  sendCount(res, 10)
})

const sendCount = (res, count) => {
  res.write("data: " + count + "\n\n")
  if (count)
    setTimeout(() => sendCount(res, count-1), 1000)
  else
    res.end()
}

app.listen(3100, () => console.log('App listening on port 3000!'))