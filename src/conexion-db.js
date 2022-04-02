// Estableciendo conexion con mysql
const mysql = require('mysql');

// Informacion en donde se conectara la BD
const miConexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_controlapp',
    port: 3306

});

// Estableciendo conexion con la BD
miConexion.connect((err) => {

    if (err) {
        console.log('DB error: ', err);
        return;
    }else{
        console.log('DB is Connected! ');
    }
        
});

// Exportar el modulo
module.exports = miConexion;
