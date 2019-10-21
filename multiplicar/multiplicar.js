//requireds
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('=============='.green);
    console.log(`==tabla de ${base}==`.green);
    console.log('=============='.green);

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let creaArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor base introducido ${base} no es un Numero.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor limite introducido ${limite} no es un Numero.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i} \n`;

        }

        fs.writeFile(`tablas/tabla-${base}_al_${limite}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`El Archivo tabla-${base}_al_${limite}.txt ha sido creado!`.green);

        });

    });
}

module.exports = {
    creaArchivo,
    listarTabla
}