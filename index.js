const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hostname = process.env.WEBSITE_HOSTNAME || 'http://localhost/';


app.use(express.static(__dirname + '/webfiles/public'));

app.get('/', (req, res) => {
  var options = {
      root: path.join(__dirname, "/webfiles/")
  };
  res.sendFile('index.html', options);
})


app.listen(port, () => {
  console.log(`Example app listening at ${hostname}:${port}`);
})