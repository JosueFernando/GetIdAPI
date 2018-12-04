//Modulos
const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Conexion
var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio1",
  password: "servicio1.123",
  database: "API"
});

connection.connect();

//Servicio rest
app.get('/rest/archivos', function (req, res) {
    
    //Parametro
   let task_IdArchivo = req.query.IdArchivo

   //Funcion
connection.query('SELECT * FROM Archivos where Id_Archivo=?', task_IdArchivo ,function (error, results, fields)  {
  if (error) throw error;
  return res.send({ error: false, data: results[0], message: 'Todos list'});

});

  });

 
  //Puerto donde escucha
app.listen(2045, function () {
 console.log('Node app is running on port 2045');

});


