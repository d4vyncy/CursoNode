require('dotenv').config();
const express = require('express');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT || 3000;

// Handle
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// // Servir contenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'David Serrudo',
        titulo: 'Curso node'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements',{
        nombre: 'David Serrudo',
        titulo: 'Curso node'
    });
});

app.get('/generic', function (req, res) {
    res.render('generic',{
        nombre: 'David Serrudo',
        titulo: 'Curso node'
    });
});

app.get('/*', function (req, res) {
    res.send('404 | page not found')
});

app.listen(port, () => {
    console.log(`Example app listeging att http://localhost:${port}`)
})