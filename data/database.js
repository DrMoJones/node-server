const sql = require('mssql');
const { stringify } = require('querystring');
//ConnectToDB
const sqlConfig = {
    user: 'sa',
    password: '1234',
    server: `LAPTOP-R66IAJ8I`,
    database: "Persons",
    port: 1433,
    

    options:{
        trustedConnection: true,
        TrustServerCertificate:true,//Change to true for local dev/ self-signed certs,
        instanceName: `UV_SERVER_JHC`
    }
}
exports.test = async function(){
    try {
        console.log("Connection start")
        await sql.connect(sqlConfig);
        const result = await sql.query`select * from Persons`;
        console.log("yguiuuhijhojbæohihjæo");
    }
    catch(err){
        console.log(err)
    }

}
//hent data med eller uden parameter
exports.getData = function(id){

}

//opret record
exports.createRecord = function(data){

}