const express = require('express')
const app = express()
const port = 3000;

// // Servir contenido estatico
 app.use( express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo en su respectiva ruta')
});

app.get('/generic', function (req, res) {
    res.sendFile(__dirname+'/public/generic.html')
});

app.get('/*', function (req, res) {
    res.send('404 | page not found')
});

app.listen(port, ()=>{
    console.log(`Example app listeging att http://localhost:${port}`)
})