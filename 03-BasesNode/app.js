
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// console.log(argv);
crearArchivo(argv.b,argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));


// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.base);




// //console.log(process.argv);
// const [,,arg3] = process.argv;
// const [,base] = arg3.split('=');

//console.log(base);

//const base = 9;

// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));
