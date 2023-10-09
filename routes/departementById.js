let express = require("express");
const departement = require("../model/departements")
let router = express.Router();

router.get("/departements/:id", async function(req, res){
    //try {
    const departid = await departement.findById(req.params.id);
    console.log(departid);
    /* if(!departid){
        return res.status(404).json({message:"département introuvable !"})
    } */
    res.send(departid);
    /* } catch (error) {
        console.error("Erreur lors de la récupération de département :", error);
        res.status(500).json({message:"Erreur lors de la récupération du département"})
    } */
    
})

module.exports = router;