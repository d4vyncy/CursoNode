const empleados = [
    {
        id: 1,
        nombre: 'David'
    },
    {
        id: 2,
        nombre: 'juan'
    },
    {
        id: 3,
        nombre: 'pedro'
    },
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1001
    }
];
const getSalario = (id, callback) => {
    const salario = salarios.find(e => e.id === id)?.salario;

    const promesa = new Promise((resolve, reject) => {
        (salario) ?
            resolve(salario)
            : reject(`Salario del empleado con id ${id} no existe`);

        // if(empleado){
        //     resolve(empleado);            
        // }else{
        //     reject(`Empleado con id ${id} no existe`);
        // }

    });

    return promesa;
}
const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;

    const promesa = new Promise((resolve, reject) => {
        (empleado) ?
            resolve(empleado)
            : reject(`Empleado con id ${id} no existe`);

        // if(empleado){
        //     resolve(empleado);            
        // }else{
        //     reject(`Empleado con id ${id} no existe`);
        // }

    });

    return promesa;
}
const id = 1;
// getEmpleado(id)
// .then(empleado => console.log(empleado))
// .catch(err => console.log(err));

// getSalario(id)
// .then(empleado => console.log(empleado))
// .catch(err => console.log(err));

getEmpleado(id)
    .then(empleado => {
        getSalario(id)
            .then(empleado => console.log(empleado))
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));

