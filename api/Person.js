const {send} = require("../helpers");
const data = require("../data/database");

module.exports = {
    GET: {
        params: ["id"],
        handler: function(req, res, p){

            data.test();

            let parms = p !== ""? p.replace("/", "").split("/"): null;
            send(req, res, {says: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn", method: req.method, parm: parms})
        }
    },

    PUT: {

    },

    POST: {
        handler: function(req, res){
            send(req, res, {says: "Do you recogize the bodies in the water?", method: req.method})
        }
    },

    DELETE: {

    }
};