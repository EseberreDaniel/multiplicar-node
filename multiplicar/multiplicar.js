const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('El valor introducido como base no es un numero');
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}  \n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}
let listarTabla = (base, limite = 10) => {
    /* return new Promise((resolve, reject) => {
         if (!Number(base)) {
             reject('El valor introducido como base no es un numero');
             return;
         }
         if (!Number(limite)) {
             reject('El valor introducido como limite no es un numero');
             return;
         }*/

    console.log('===================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*1}`);
    }
    console.log('======================'.green)
        //  });
}

module.exports = {
    crearArchivo,
    listarTabla
}