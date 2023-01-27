const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs')
//para que la consola tenga colores
const colors = require('colors');
require('colors');


//console.clear();

crearArchivo( argv.b, argv.l, argv.h )
.then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
.catch( err => console.log(err))

