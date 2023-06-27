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




app.post('/insertar', (req, res) => {
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
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
 

const{Usuario, Nombre, Apellido, Barrio, Provincia, CodigoPostal}= req.body;
const sql = 'insert into ingreso values(NULL,"'+Usuario+'","'+Nombre+'","'+Apellido+'","'+Barrio+'","'+Provincia+'","'+CodigoPostal+'")';
const values=[Usuario, Nombre, Apellido, Barrio, Provincia, CodigoPostal];


conexion.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Result: " + result);
  });
})


app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})


