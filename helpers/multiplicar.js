//fs.writeFile(file, data[, options], callback)
const fs = require('fs');
const colors = require('colors');



const crearArchivo = async( base, listar = false, hasta = 10 ) => {

    try {
        
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
        salida += `${base} * ${i} = ${base * i}\n`;
        }
        
        if ( listar ) {
            console.log(salida.blue);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            
        return(`tabla-${base}.txt creada`);
            
        
    } catch (err) {
        throw err;
    }

        
        
        
}

module.exports = {
    crearArchivo
}