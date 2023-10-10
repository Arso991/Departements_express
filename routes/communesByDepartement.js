let express = require("express");
const communes = require("../model/communes");
let router = express.Router();

router.get("/:id/communes", async function(req, res){
    try {
        const allcommune = await communes.find({id_departement: req.params.id});
        if(!allcommune){
            return res.status(404).json({message:"liste des communes introuvable"})
        }
        res.send(allcommune);
    } catch (error) {
        console.error("Erreur lors de la récupération des communes", error);
        res.status(500).json({message:"Erreur lors de la récupération des communes"})
    }
    
})

module.exports = router;