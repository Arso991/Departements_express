const mongoose = require("mongoose");

const departementSchema = mongoose.Schema({
    id: Number,
    name : String
})

const departement = mongoose.model("departements", departementSchema);

module.exports = departement;