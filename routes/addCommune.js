const express = require("express");
const router = express.Router();
const departements = require("../model/departements");
const communes = require("../model/communes");

router.post("/:id/communes", async function(req, res){
    try {
        const depart = await departements.findById(req.params.id)

        if(!depart){
        return res.status(404).json({message:"département introuvable !"});
        }
    
        const newCommune = new communes({
            id_departement:depart,
            name:req.body.name
        });

        const addCommune = await newCommune.save();

        res.status(201).json(addCommune, {message:"Commune ajoutée !"});
    } catch (error) {
        console.error("Erreur lors de l'ajout de la commune", error);
        res.status(500).json({message:"Erreur lors de l'ajout de la commune"})
    }
    
})

module.exports = router;