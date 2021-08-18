const helpers = require("./helpers");
const logger = require("./loggers");
const api = {};

api["/api/duck"] = require("./api/duck");
api["/api/cat"] = require("./api/cat");
api["/api/cat/:id"] = require("./api/cat");

module.exports = function(req, res){
   //const url = req.url;
   
   logger(req, res);
   
   const endpoint = new URL(req.url, "http://localhost:3003").pathname;
   
    const regEx = /^\/((css|img|js)\/)?[\w-]+\.(html|css|png|jpe?g|gif|tiff|svg|bmp|js)$/i;
    let result = endpoint.match(regEx);

    if(result){
        //helpers.sendFile(req, res, "./static/" + result[0])
        helpers.streamFile(req, res, "./static/" + result[0])
        return;
    }

    //Hvis jeg er her, er der ikke fundet en match
    const apiRX = /^(\/api\/\w+)(\/\w+)?$/;
    result = endpoint.match(apiRX);
    //console.log(result);

    if (result) {
        //Hvis jeg er her, er der fundet en match 
        if (api[result[1]]) {
            if (api[result[1]][req.method]) {
                //Hvis jeg er her, er der fundet en metode, der matcher req.method
                api[result[1]][req.method].handler(req, res, result[2]);
                return;
            }
            helpers.send(req, res, {message: `Resource '${endpoint}' not avaiable`}, 404)
            return;
        }
    }

   /*
   if(endpoint === "/index.html"){
       helpers.sendFile(req, res, "./static/index.html");
       return;
   }
   */


   console.log(endpoint);
   helpers.send(req, res, {message: "Resource '" + endpoint + "' not available"}, 404);

   // helpers.send(req, res, {besked: "Her kommer beskeden"});
   
    /*
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.write("Hello World");
    res.end();
    */
}