const inquirer = require('inquirer');
const Tareas = require('../models/tareas');

require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tares completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tares pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar trea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            },
        ]
    }
];

const inquiereMenu = async () => {

    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción'.white);
    console.log('==========================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);
    return opcion;
}

const pausa = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Precio ${'enter'.green} para continuar`
        }];
    console.log('\n');
    await inquirer.prompt(question);

}

const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listadoTareasBorrar = async (tareas = []) => {

    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    });

    choices.unshift({
        value:'0',
        name:'0.'.green + ' Cancelar'
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const confirmar =async (message)=>{
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];
    const {ok} = await inquirer.prompt(question);
    return ok;
}


const mostrarListadoChecklist = async (tareas = []) => {

    const choices = tareas.map((tarea, i) => {
        const idx = `${i + 1}`.green;
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true:false
            // checked: true
        }
    });

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(preguntas);
    return ids;
}



module.exports = {
    inquiereMenu, pausa, leerInput, listadoTareasBorrar,confirmar,mostrarListadoChecklist
}