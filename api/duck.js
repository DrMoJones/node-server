const {send} = require("../helpers");

module.exports = {
    GET: {
        params: ["id"],
        handler: function(req, res){
            send(req, res, {says: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn", method: req.method})
        }
    }
    
};