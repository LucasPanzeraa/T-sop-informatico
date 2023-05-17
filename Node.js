const express = require('express')
const app = express()
const port = 3000

app.get('/inicio', (req, res) => {
  res.sendFile(__dirname+'/Ingreso.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})