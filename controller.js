const helpers = require("./helpers");
const logger = require("./loggers");

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

    console.log(result);

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