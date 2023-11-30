const mongoose = require("mongoose");
require("dotenv").config();
const config = require("../config");

const {contactSchema} = require("../models/contact");
const {UserSchema} = require("../models/user");

function connectDB(){
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    mongoose.connection.on("error", (err)=>{
        console.log("MongoDB connection error:",err);
    })
}

const ContactModel = mongoose.model("Contact",contactSchema);
const UserModel = mongoose.model("User",userSchema);

module.exports= {connectDB,ContactModel,UserModel};