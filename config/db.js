const mongoose = require("mongoose");
const dotenv = require("dotenv");
const MONGODB_URL = "mongodb://localhost:27017/geographydb";

dotenv.config();

const store = async ()=>{
    try {
      const con = await mongoose.connect(MONGODB_URL);
      console.log(`Connected:${con.connection.host}`);
    } catch (error) {
        console.error(error);
    }
} 

module.exports = store