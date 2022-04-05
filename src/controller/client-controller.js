const miConexion = require('../conexion-db');

const controllerConnection = {};

// Metdo para mostrar los clientes---------------------------------------------
controllerConnection.listClient = (req, res) => {
    const sql = 'SELECT * FROM clientes';
    miConexion.query(sql, (err, result) =>{
        if (err){
            console.log('Error: ', err);
            return;
        }else{
            res.json(result);
        }

    });
}


// Metodo para listar Clientes por Id ------------------------------------------
controllerConnection.listClientId = (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM clientes WHERE id_clientes= ${id}`;
    miConexion.query(sql, (err, row) => {
        if (err){
            console.log('Error: ', err);
            return;
        }else{
            res.json(row);
        }

    });    
}

// Metodo para Agregar Clientes ------------------------------------------------
controllerConnection.addClient = (req, res) => {
    const data = req.body;
    const sql = `INSERT INTO clientes SET ?`;
    miConexion.query(sql, data, (err, add) => {
        if (err){
            console.log('Error: ', err);
            return;
        }else{
            res.json(add);
            res.send('Agregado con Exito');
        }
    });
}

// Metodo para editar un Cliente ------------------------------------------------
controllerConnection.edit = (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const sql = 'UPDATE clientes SET ? WHERE id_cliente = ?';
    miConexion.query(sql, [data, id], (err, result) => {
        if (err){
            console.log('Error: ', err);
            return;
        }else{
            res.json(result);
            res.send('Actualizado! ');
        }
    });
}

// Metodo para Eliminar registros de Cliente -----------------------------------
controllerConnection.deleteClient = (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM clientes WHERE id_clientes = ${id}`;
    miConexion.query (sql, (err, result) => {
        if (err){
            console.log('Error: ', err);
            return;
        }else{
            res.json(result);
            res.send('Registro Eliminado con exito');
        }
    })
}




module.exports = controllerConnection;
