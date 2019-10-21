const argv = require('./config/yargs').argv;
const colors = require('colors');


const { creaArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        creaArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;

}

// console.log(`Limite: ${argv.limite}, Base: ${argv.base}`);

// let parametro = argv[2];
// let base = parametro.split('=')[1]