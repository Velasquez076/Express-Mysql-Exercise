const miConexion = require('../conexion-db');

// 
const controllerConnection = {};


// Metodo para listar Usuarios --------------------------------------------------
controllerConnection.listUser = (req, res) => {
    const sql = `SELECT * FROM usuarios`;
    miConexion.query(sql, (err, rows) => {
        if (err) {
            console.log('Error: ', err);
            return;
        } else {
            res.json(rows);
        }

    });

};


// Metodo para listar Usuarios por su ID ------------------------------------------
controllerConnection.listUserId = (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM usuarios WHERE id_usuario = ${id}`;
    miConexion.query(sql, (err, row) => {
        if (err) {
            console.log('Error: ', err);
            return;
        } else {
            res.json(row);
        }
    });

};


// Agregando usuarios a la BD------------------------------------------------------
controllerConnection.addUser = (req, res) => {
    const values = req.body;
    const sql = 'INSERT INTO usuarios SET ?';
    miConexion.query(sql,values, (err, result) => {
        if (err) {
            console.log('Error: ', err);
            return;
        } else {
            res.json(result);
        }
        
    });

}

// Metodo para Editar un Registro de la BD ------------------------------------------
controllerConnection.edit = (req, res) => {
    const values = req.body;
    const { id }  = req.params;
    const sql = 'UPDATE usuarios set ? WHERE id_usuario = ?';
    miConexion.query(sql, [values, id], (err, result) => {
        if (err) {
            console.log('Error: ', err);
            return;
        } else {
            res.json(result);
        }
    })
}

 
// Metodo para Eliminar un registro en la BD ------------------------------------------
controllerConnection.delete = (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM usuarios WHERE id_usuario = ${id}`;
    miConexion.query(sql, (err, result) => {
        if (err) {
            console.log('Error: ', err);
            return;
        } else {
            res.json(result);
        }
        
    });

};



// Exprtacion del modulo del controller
module.exports = controllerConnection;


