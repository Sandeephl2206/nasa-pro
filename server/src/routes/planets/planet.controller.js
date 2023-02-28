const { planets }  = require("../../modal/planets.modal")
function getallplanets(req,res){
    return res.status(200).json(planets);             
}
module.exports = {
    getallplanets,
};