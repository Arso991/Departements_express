let express = require("express");
const departement = require("../model/departements")
let router = express.Router();

router.get("/", async function(req, res){
    const depart = await departement.find();
    res.send(depart);
})

module.exports = router;
