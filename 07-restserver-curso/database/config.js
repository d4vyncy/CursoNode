const mongoose = require('mongoose');
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB Online');
            // .then(() => {
            //     console.log('DB Online');
            // })
            // .catch((error) => {
            //     console.error("Error connecting to MongoDB Atlas", error);
            // });

    } catch (error) {
        console.error('Error details:', error.message);
        console.error('Stack trace:', error.stack);
        throw new Error('Error al inicializar la base de datos');
    }
}

module.exports = {
    dbConnection
}

// const mongoose = require('mongoose');
// const uri = "mongodb+srv://dav_user_node:GVgGrIYm72ai4HgQ@miclusterdav.matulik.mongodb.net";
// const dbConnection = async () => {
//     try {
//         mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//             .then(() => {
//                 console.log("Connected to MongoDB Atlas!");
//             })
//             .catch((error) => {
//                 console.error("Error connecting to MongoDB Atlas", error);
//             });
//     } catch (error) {
//         console.error('Error details:', error.message);
//         console.error('Stack trace:', error.stack);
//         throw new Error('Error al inicializar la base de datos');
//     }
// }

module.exports = {
    dbConnection
}