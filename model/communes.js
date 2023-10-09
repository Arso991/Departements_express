const mongoose = require("mongoose");

const communeSchema = mongoose.Schema({
    id_departement:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"departements"
    },
    name:String
});

const communes = mongoose.model("communes", communeSchema);

module.exports = communes;