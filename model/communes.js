const mongoose = require("mongoose");

const communeSchema = mongoose.Schema({
    name:String,
    id_departement:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"departements"
    }
   
});

const communes = mongoose.model("communes", communeSchema);

module.exports = communes;