const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(bodyParser.json());
var cors = require("cors");
app.use(cors());

// db connection
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://127.0.0.1:27017/superwarden', {})
mongoose.connect('mongodb+srv://doadmin:yh631728AJQZS9I5@superwarden-db-00429b97.mongo.ondigitalocean.com/admin?tls=true&authSource=admin', {})
  .then(() =>  console.log('mongodb is connected'))
  .catch((err) => console.error(err));

// file download
app.get('/download', function(req, res){
  const file = `${__dirname}/files/whitelist.xlsx`;
  res.download(file); // Set disposition and send it.
});
// api connection
const apiRoute = require('./src/api/route')
app.use('/api/v1', apiRoute)

// connecting client
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});
// setting port and run
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`listening on ${port}`);
