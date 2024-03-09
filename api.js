const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const PORT = process.env.PORT || 3030;

app.get('/', function (req, res) {
  res.send('Hello')
})

app.get('/Students', function (req, res) {
    let data = [{id:1, name:'Jana'}]
    res.send(data)
 })

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });