const {Schema, model } = require('mongoose');

const UsuarioSchema = Schema(
{
    nombre: {
        type: String,
        required: [true, ' El nombre es olbigatorio']
    },
    correo: {
        type: String,
        required: [true, ' El correo es olbigatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, ' La contraseña es olbigatoria']
    },
    img: {
        type: String       
    },
    rol: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE','USER_ROL']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },

});

UsuarioSchema.methods.toJSON = function() {
    const { __v,password, ...usuario } = this.toObject();
    return usuario;
}

module.exports = model('Usuario', UsuarioSchema);