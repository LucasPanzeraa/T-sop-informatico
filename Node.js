const express = require('express')
const app = express()
const port = 3000
const path = require("path")
const imagenes = path.join(__dirname,"Imagenes")
app.use(express.static(imagenes))

app.get('/inicio', (req, res) => {
  res.sendFile(__dirname+'/Ingreso.html')
})

app.get('/carrusel', (req, res) => {
  res.sendFile(__dirname+'/carrusel.html')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
