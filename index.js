const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const workDir = '/webfiles/'
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.sendFile(workDir+'index.html')
})

