const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
const fs = require("fs");
const xlsx = require("xlsx");
const PORT = process.env.PORT || 3030;

app.get('/', function (req, res) {
  res.send('Hello')
})

app.get('/Students', function (req, res) {
    // let data = [{id:1, name:'Jana'}]
    let wb = xlsx.readFile("data.xlsx");
    let ws = wb.Sheets["Students"];
    let data = xlsx.utils.sheet_to_json(ws);

    res.send(data)
 })

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });