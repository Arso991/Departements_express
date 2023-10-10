const express = require("express")
const router = express.Router()
const departement = require("../model/departements")

router.post("/", async function(req, res){
    try {
        const newDepartemment = new departement({
            name:req.body.name
        });
    
        const addDepartement = await newDepartemment.save();
        res.status(201).json(addDepartement, {message:"Département ajouté !"});
    } catch (error) {
        console.error("Erreur lors de l'ajout du département");
        res.status(500).json({message:"Erreur lors de l'ajout du département"})
    }
    
})

module.exports = router;