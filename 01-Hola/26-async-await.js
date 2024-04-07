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
    return new Promise((resolve, reject) => {
        const salario = salarios.find(e => e.id === id)?.salario;
        (salario)
            ? resolve(salario)
            : reject(`Salario del empleado con id ${id} no existe`);

    });
}
const getEmpleado = (id, callback) => {

    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject(`Empleado con id ${id} no existe`);
    });
}

const getInfoUsuario = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado: ${empleado} es de ${salario}`;
    } catch(error) { 
        throw error;
    }
}
const id = 10;
getInfoUsuario(id)
    .then(msg => {
        console.log('todo bien')
        console.log(msg)
    })
    .catch(err =>{
        console.log('todo mal')
         console.log(err)
        });

