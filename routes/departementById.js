let express = require("express");
const departement = require("../model/departements")
let router = express.Router();

router.get("/:id", async function(req, res){
    const departid = await departement.findById(req.params.id);
    res.send(departid);
})

module.exports = router;