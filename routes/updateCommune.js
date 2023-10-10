const express = require("express");
const router = express.Router();
const departements = require("../model/departements");
const communes = require("../model/communes");

router.put("/:id/communes/:id_commune", async function(req, res){
    try {
        const depart = await departements.findById(req.params.id);
        if(!depart){
            return res.status(404).json({message:"Departement introuvable !"});
        }
        const commune = await communes.findOneAndUpdate(
            {_id:req.params.id_commune, id_departement:depart},
            {name:req.body.name},
            {new:true}
        );
        
        if(!commune){
            return res.status(404).json({message:"Commune à mettre à jour introuvable !"})
        }
        res.status(200).json(commune, {message:"Commune modifiée !"});
    } catch (error) {
        console.error("Erreur lors de la récupération de la commune", error);
        res.status(404).json("Erreur lors de la récupération de la commune");
    }
});

module.exports = router;