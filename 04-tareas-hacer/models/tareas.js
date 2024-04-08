/**
 * _listado
 * {úuid-121212-121212-1:{id12,desc:asd,completadoEn:92231}}

 */
const Tarea = require('./tarea')
class Tareas {
    _listado = {
    };

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;

    }

    constructor() {
        this._listado = {};
    }

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        this.listadoArr.forEach((tarea, i) => {
            const ids = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red
            console.log(`${ids} ${desc} :: ${estado}`);
        });
    }
    listasPendientesCompletadas(completadas = true) {
        let contador = 0;
        this.listadoArr.forEach((tarea) => {
            const ids = `${contador + 1}.`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red
            if (completadas) {
                if (completadoEn) {
                    console.log(`${contador} ${desc} :: ${estado}`);
                    contador++;
                }
            }
            else {
                if (!completadoEn) {
                    console.log(`${contador} ${desc} :: ${estado}`);
                    contador++;
                }
            }
        });
    }

    toggleCompletadas(ids = []) {
        ids.forEach(id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }

        });

        this.listadoArr.forEach(tarea => {
            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }
}

module.exports = Tareas;