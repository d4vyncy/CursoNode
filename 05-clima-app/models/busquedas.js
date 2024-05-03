const axios = require('axios');

const fs = require('fs');

class Busquedas {
    historial = [];
    dbPath='./db/database.json'

    constructor() {
        this.leerDB();
    }

    get historialCapitalizado(){
        // Capitalizar cada palabra
        return this.historial;
    }

    get parmsMapbox() {
        return {
            // 'country': 'bo',
            'access_token': process.env.MAPBOX_KEY || '',
            'limit': 5,
            'language': 'es'
        }
    }


    async ciudad(lugar = '') {

        try {
            const intance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.parmsMapbox
            });

            // console.log(intance);
            const resp = await intance.get();
            // console.log(resp.data);
            return resp.data.features.map(lugar => ({
                id: lugar.id,
                name: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            })); //retornar los lugares que coincidan 
        } catch (error) {
            console.log('error');
            return [];
        }


    }

    get parmsWeather() {
        return {
            // 'country': 'bo',
            'appid': process.env.OPENWEATHER_KEY || '',
            'units': 'metric',
            'lang': 'es'
        }
    }

    async climaLugar(lat, lon) {

        try {
            const intance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`,
                params: this.parmsWeather
            });

            // console.log(intance);
            const resp = await intance.get();
            const {weather,main} = resp.data;
            // console.log(resp);
            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp,
            }; //retornar los lugares que coincidan 
        } catch (error) {
            console.log('error');
            return [];
        }


    }

    agregarHistorial(lugar =''){
        if(this.historial.includes(lugar.toLowerCase())){
            return;
        }
        this.historial.unshift(lugar);

        //grabar en db
        this.guardarDB();
    }

    guardarDB(){
        const payload={
            historial: this.historial
        }
        fs.writeFileSync(this.dbPath,JSON.stringify(payload))

    }
    leerDB(){
        if (fs.existsSync(this.dbPath)){
            return;
        }

        const info = fs.readFileSync(this.dbPath,{encoding:'utf-8'});
        const data = JSON.parse(info)
        this.historial=data.historial

    }
}

module.exports = Busquedas