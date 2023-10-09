let express = require("express");
const departement = require("../model/departements")
let router = express.Router();

router.get("/departements/:id/communes", async function(req, res){
    const commune = await departement.find({id_departement: req.params.id});
    res.send(commune);
})

module.exports = router;