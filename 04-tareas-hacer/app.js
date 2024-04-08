require('colors');

const { inquiereMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist
} = require('./helpers/inquirer');
const {
    guardarDB, leerDB
} = require('./helpers/guardarArchivo');
const Tareas = require('./models/tareas');

const main = async () => {

    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }
    //await pausa();

    do {
        opt = await inquiereMenu();
        //console.log({ opt });
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                //console.log(desc);
                break;
            case '2':
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listasPendientesCompletadas(true);
                break;
            case '4':
                tareas.listasPendientesCompletadas(false);
                break;
            case '5': //completar
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                //console.log(ids);
                tareas.toggleCompletadas(ids);
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if (id !== '0') {
                    const ok = await confirmar('Esta seguro?')
                    // todo: preguntar si esta seguro
                    // console.log(ok);
                    if (ok) {
                        tareas.borrarTarea(id);
                        console.log('tarea borrada');
                    }
                }

                break;
        }

        //solo para pruebas
        guardarDB(tareas.listadoArr);

        await pausa();

    } while (opt !== '0')


    //pausa();
}

main();