const mongoose = require("mongoose");

const communeSchema = mongoose.Schema({
    id_departement:Number,
    id_commune:Number,
    name:String
});

const communes = mongoose.model("communes", communeSchema);

module.exports = communes;