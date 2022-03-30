const argv = require('yargs')
    .option('t', {
        alias:  'table',
        type: 'number',
        description:'base de la tabla de multiplicacion',
        demandOption:true    //required

    })
    .option('l', {
        alias:  'list',
        type: 'boolean',
        description:'Muestra la tabla'

    })
    .option('e', {
        alias:  'end',
        type: 'number',
        description:'Ultimo numero en multiplicar',
        default:10

    })
    .check((argv, options )=>{
        if(isNaN(argv.t)){
            throw'la base tiene que ser un numero';
        }
        return true;
    })
    .argv
    ;

    module.exports=argv