const fs = require ('fs');
const colors = require('colors');

const createFile =async (table=5, start=1, end=10, list)=>{
    let out = '';
    let cons = '';
    const txtName=`./out/table-${table}.txt`;
    try{
        out+='========================================== \n';
        out+=`\t\tTabla del ${table}\n`;
        out+="==========================================\n";

        cons+='========================================== \n'.rainbow;
        cons+=`\t\tTabla del ${table}\n`.america;
        cons+="========================================== \n".rainbow;
        
        console.log(cons);

        for(let i=start;i<=end;i++){
            out+=`${i} x ${table} = ${i*table}\n`;
            if(list){
                console.log("		" + i + ` x `.random + table + ` = ` + i*table );
            }
        }
        console.log();
        
        fs.writeFileSync(txtName,out);
        return txtName;

    }catch(err){
        throw err;
    }

}

module.exports={
    createFile
}