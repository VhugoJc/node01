
const {createFile} = require('./helpers/mult.js');
const argv = require('./config/yargs');

const table = argv.table;
const list =  argv.list;
const end  =   argv.end;
const start=1;

createFile(table, start, end,list ).then(response=>console.log(response+' ha sido creado'.bold)).catch(err=>console.log(err))
