const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "name":"Rocío"
    },
    {
      "id":"2",
      "name":"Martín"
    },
    {
      "id":"3",
      "name":"Nacho"
    }
  ])
})

app.listen(3000, () => {
  console.log('listening for requests on port 3000');
})