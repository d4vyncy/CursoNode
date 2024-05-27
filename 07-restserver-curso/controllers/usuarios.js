const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');



const usuariosGet = async (req = request, res = response) => {

    const { limite=2, desde =0}= req.query;
    const query = {estado:true};

    const resp = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
        .skip(Number(desde ))
        .limit(Number(limite))
    ]);

    res.json({        
        resp
    });

    // const { limite=2, desde =0}= req.query;
    // const query = {estado:true};

    // const usuarios = await Usuario.find(query)
    // .skip(Number(desde ))
    // .limit(Number(limite));

    // const total=await Usuario.countDocuments(query);
    
    // res.json({        
    //     total,
    //     usuarios
        
    // });
}

const usuariosPost = async (req = request, res = response) => {



    const { nombre, correo, password, rol } = req.body;
    const usuario = new Usuario({
        nombre, correo, password, rol
    });

    //verificar si el correo existe
    // const existeEmail= await Usuario.findOne({correo: correo});
    // if(existeEmail){
    //     return res.status(400).json({
    //         msg: 'el correo ya esta registrado'

    //     });

    // }

    //encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(usuario.password, salt);

    //guardar en base de datos

    await usuario.save();

    res.json({
        msg: 'post API - usuariosPost',
        usuario
    });
}

const usuariosPut = async(req, res = response) => {

    const { id } = req.params;
    const { password, google, correo, ...resto } = req.body;

    // TODO validar contra base de datos
    if (password) {
        //encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id,resto)

    res.json({
        msg: 'put API - usuariosPut',
        usuario
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = async (req, res = response) => {
    const { id } = req.params;

    //fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete(id)
    //borramos logicamente
    const usuario = await Usuario.findByIdAndUpdate(id,{estado:false})

    res.json({        
        usuario
    });
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}