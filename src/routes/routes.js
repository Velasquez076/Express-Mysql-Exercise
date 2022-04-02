// Se requiere para la creacion de rutas
const express = require('express');
const user = require('../controller/user-controller');
const client = require('../controller/client-controller');

// Metodo retorna un obj router
const router = express.Router();

// Rutas para el crud de los usuarios------------------------------------
router.get('/', user.listUser);
router.get('/:id', user.listUserId);
router.post('/add', user.addUser);
router.delete('/:id', user.delete);
router.put('/:id', user.edit);


// Rutas para Crud de Clientes -------------------------------------------
router.get('/client', client.listClient);
router.get('/client/:id', client.listClientId);
router.post('/client/add', client.addClient);
router.put('/client/:id', client.edit);
router.delete('/cliente/:id', client.deleteClient);



// Exportacion del modulo
module.exports = router;

