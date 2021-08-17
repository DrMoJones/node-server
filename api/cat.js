const {send} = require("../helpers");

module.exports = {
    GET: {
        params: ["id"],
        handler: function(req, res, p){
            this.params = p;
            send(req, res, {says: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn", method: req.method, parm: p})
        }
    },

    POST: {
        handler: function(req, res){
            send(req, res, {says: "Do you recogize the bodies in the water?", method: req.method})
        }
    }
};