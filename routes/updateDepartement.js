const express = require("express");
const router = express.Router();
const departements = require("../model/departements");

router.put("/:id", async function(req, res){
    try {
        const departement = await departements.findOneAndUpdate(
            {_id:req.params.id},
            {name:req.body.name},
            {new:true}
        );
        if(!departement){
            return res.status(404).json({message:"Département à mettre à jour introuvable !"})
        }
        res.status(200).json(departement,{message:"Departement modifié !"})
        
    } catch (error) {
        console.error("Erreur lors de la récupération du département", error);
        res.status(404).json("Erreur lors de la récupération du département");
    }
});

module.exports = router;