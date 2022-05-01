const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );
app.use("/", require('./routes'));
app.listen(port, () => {
  console.log(`data app listening at http://localhost:${port}`);
});