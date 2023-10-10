var express = require("express");
const departement = require("../model/departements");
var router = express.Router();


router.get("/:id", async function(req, res){
    try {
        const departid = await departement.findById(req.params.id);
        if(!departid){
            return res.status(404).json({message:"Département introuvable !"});
        }
        res.send(departid);
    } catch (error) {
        console.error("Erreur lors de la récupération du département", error);
        res.status(500).json({message:"Erreur lors de la récupération du département"});
    }
});

module.exports = router;