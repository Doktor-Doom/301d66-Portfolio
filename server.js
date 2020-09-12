const express = require('express')
const app = express()
const PORT = process.env.PORT;

require('dotenv').config();

app.use(express.static('./public'));

app.get('/', function (req, res) {
  res.send('Whats\'s good, Hollywood?')
});
 
// app.listen(3000)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});