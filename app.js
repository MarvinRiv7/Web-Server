
const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/hola-mundo', (req, res) => {
  res.send('Hello World!!!!!!!')
})

app.use((req, res) => {
  res.status(404).send('404 Page Not Found');
});


console.log('App corriendo')
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})