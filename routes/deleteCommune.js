const express = require("express");
const router = express.Router();
const departements = require("../model/departements");
const communes = require("../model/communes");

router.delete("/:id/communes/:id_commune", async function(req, res){
    try {
        const depart = await departements.findById(req.params.id);
        if(!depart){
            return res.status(404).json({message:"Departement introuvable !"});
        }
        const commune = await communes.findOneAndRemove(
            {_id:req.params.id_commune, id_departement:depart}
        );
        
        if(!commune){
            return res.status(404).json({message:"Commune à mettre à jour introuvable !"});
        }
        res.status(200).json({message:"Commune supprimée !"});
    } catch (error) {
        console.error("Erreur lors de la récupération de la commune.", error);
        res.status(404).json("Erreur lors de la récupération de la commune.");
    }
});

module.exports = router;