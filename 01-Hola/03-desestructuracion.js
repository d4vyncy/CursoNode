const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'regeneracion',
    getNombre: function(){
        return `${this.nombre} ${this.apellido}`;
    }
}

// function imprimeHeroe(heroe){
// const {nombre,apellido,poder,edad=0} = heroe;
// console.log(nombre,apellido,poder,edad);
// }
// nota1:
// const nombre=deadpool.nombre;
// const apellido=deadpool.apellido;
// const poder=deadpool.poder;

// nota2:
// const {nombre,apellido,poder} = deadpool;
// console.log(nombre,apellido,poder);

function imprimeHeroe({nombre,apellido,poder,edad=0}){    
    nombre='David';
    console.log(nombre,apellido,poder,edad);
    }
// imprimeHeroe(deadpool);

const heroes = ['Deadpool','Superman','Batman'];
const h1=heroes[0];
const h2=heroes[1];
const h3=heroes[2];

console.log(h1,h2,h3);