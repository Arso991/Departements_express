let express = require("express");
const departement = require("../model/departements")
let router = express.Router();

router.get("/", async function(req, res){
    try {
        const depart = await departement.find();
        if(!depart){
            return res.status(404).json({message:"Liste des départements introuvable !"});
        }
        res.send(depart);
    } catch (error) {
        console.error("Erreur lors de la récupération des départements", error);
        res.status(404).json("Erreur lors de la récupération des départements");
    }
});

module.exports = router;
