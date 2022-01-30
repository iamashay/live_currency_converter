const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  var options = {
      root: path.join(__dirname, "/webfiles/")
  };
  res.sendFile('index.html', options)
})

