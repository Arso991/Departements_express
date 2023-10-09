const mongoose = require("mongoose");

const departementSchema = mongoose.Schema({
    name : String
})

const departement = mongoose.model("departements", departementSchema);

module.exports = departement;