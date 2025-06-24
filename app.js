const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const hbs = require('hbs');


//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
//middleware servir contenido estatico

app.use(express.static("public"));

// app.get("/generic", (req, res) => {
//   res.sendFile(__dirname + "/public/generic.html");
// });
// app.get("/elements", (req, res) => {
//   res.sendFile(__dirname + "/public/elements.html");
// });

app.get("/", (req, res) => {
  res.render('home', {
    nombre: 'Marvin Rivas',
    titulo: 'Curso de Node.js'
  });
});

app.get("/generic", (req, res) => {
  res.render('generic', {
    nombre: 'Marvin Rivas',
    titulo: 'Curso de Node.js'
  });
});

app.get("/elements", (req, res) => {
  res.render('elements', {
    nombre: 'Marvin Rivas',
    titulo: 'Curso de Node.js'
  });
});

app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

console.log("App corriendo");
app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`);
});

