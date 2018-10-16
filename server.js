const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});
const port = process.env.PORT || 5656;
app.listen(port, () => {
  console.log(`Open http://localhost:${port}`);
});
