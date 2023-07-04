const express = require('express')
const app = express()
const port = 3000
const path = require("path")
const imagenes = path.join(__dirname,"Imagenes")
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(imagenes))

app.get('/inicio', (req, res) => {
  res.sendFile(__dirname+'/Ingreso.html')
})

app.get('/carrusel', (req, res) => {
  res.sendFile(__dirname+'/carrusel.html')
})




app.post('/insertar', (req, res) => {
  console.log("entre");
  var mysql      = require('mysql');
  var conexion = mysql.createConnection({
  host     : 'localhost',
  user     : 'alumno',
  password : 'alumnoipm',
  database : 'html'
});


conexion.connect(function(err) {
  if (err) {
      console.error('Error de conexion: ' + err.stack);
      return;
  }
  console.log('Conectado con el identificador ' + conexion.threadId);
});
 

const{nombre, apellido,usuario, barrio, codPostal}= req.body;
const sql = 'insert into ingreso values(NULL,"'+usuario+'","'+nombre+'","'+apellido+'","'+barrio+'","'+codPostal+'")';




conexion.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Result: " + result);
  });
})


app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})


