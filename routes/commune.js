let express = require("express");
const communes = require("../model/communes");
let router = express.Router();

router.get("/:id/communes/:id_commune", async function(req, res){
    try {
        const depart_commune = await communes.findOne({_id: req.params.id_commune, id_departement: req.params.id});
        if(!depart_commune){
            return res.status(404).json({message:"Commune introuvable !"});
        }
        res.send(depart_commune);
    } catch (error) {
        console.error("Erreur lors de la récupération de la commune.", error);
        res.status(500).json({message:"Erreur lors de la récupération de la commune."});
    }
   
    
})

module.exports = router;