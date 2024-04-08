require('dotenv').config()

const { inquiereMenu, pausa, leerInput, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

//console.log(process.env);

const main = async () => {


    const busquedas = new Busquedas();
    let opt;
    do {
        opt = await inquiereMenu();
        // console.log( opt );
        switch (opt) {
            case 1:
                const termino = await leerInput('Ciudad: ');

                const lugares = await busquedas.ciudad(termino);
                const id = await listarLugares(lugares);
                if (id === '0') continue;
                const lugarSel = lugares.find(l => l.id === id);
                busquedas.agregarHistorial(lugarSel.name);
                const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);

                //console.log(clima);
                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad:', lugarSel.name);
                console.log('Lat:', lugarSel.lat);
                console.log('Lng:', lugarSel.lng);
                console.log('Temperatura:', clima.temp);
                console.log('Minima:', clima.min);
                console.log('Maxima:', clima.max);
                console.log('Como esta el clima:', clima.desc);
                break;
            case 2:
                busquedas.historial.forEach((lugar,i)=>{

                    const idx = `${i+1}.`.green;
                    console.log(`${idx} ${lugar}`);
                });


                break;
        }


        await pausa();

    } while (opt !== 0)

}


main();