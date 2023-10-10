const express = require("express");
const router = express.Router();
const departements = require("../model/departements");

router.delete("/:id", async function(req, res){
    try {
        const departement = await departements.findOneAndRemove(
            {_id:req.params.id}
        );
        if(!departement){
            return res.status(404).json({message:"Departement à supprimer introuvable !"})
        }
        res.status(200).json({message:"Département supprimé !"})
    } catch (error) {
        console.error("Erreur lors de la récupération du département.", error);
        res.status(404).json("Erreur lors de la récupération du département.");
    }
});

module.exports = router;