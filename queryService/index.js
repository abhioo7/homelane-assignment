const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require('cors');
const axios = require('axios').default;
const port = 3002;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use("/", require('./routes'));
app.listen(port, () => {
  console.log(`query app listening at http://localhost:${port}`);
});