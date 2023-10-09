let express = require("express");
const communes = require("../model/communes");
let router = express.Router();

router.get("/", async function(req, res){
    const commune = await communes.find();
    res.send(commune);
});

module.exports = router;