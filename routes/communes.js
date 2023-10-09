let express = require("express");
const communes = require("../model/communes");
let router = express.Router();

router.get("/", async function(req, res){
    try {
        const commune = await communes.find();
        if(!commune){
            return res.status(404).json({message:"liste de communes introuvables !"})
        }
        res.send(commune);
    } catch (error) {
        console.error("Erreur lors de la récupération des communes", error)
        res.status(500).json({message:"Erreur lors de la récupration des communes"})
    }
});

module.exports = router;