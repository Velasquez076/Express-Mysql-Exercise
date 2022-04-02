// Modulos requeridos
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const miConexion = require('./conexion-db');
const routes = require('./routes/routes')

const app = express();

// se establece el puerto del servdor
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


// Se importan las rutas 
app.use(routes);



// Se inicializa el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
