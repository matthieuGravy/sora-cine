const express = require("express");
const mongoose = require("mongoose");
const app = express();
const {getCrime, getFantasy, getActAdv, getComedy, getMystery,getAllSeries } = require("./models/genres");
const cors = require("cors");
const { getAnimeData } = require("./controllers/api");
const { getContact, postContact } = require("./routes/contact");
const {saveCrimeToDb,saveFantasyToDb,saveComedyToDb,saveActionToDb,saveMysteryToDb,} = require ("./controllers/genre")
const {getAllUsers,getUserById,postUser,deleteUserById,putUserById,} = require("./routes/users");
const { postDeletedUsers } = require("./routes/deletedUsers");
const { getLogin, postLogin } = require("./routes/login");
require("dotenv").config();
app.use(express.json());
const port = 3200;
const nodemailer = require("nodemailer")
const connectDB = require("./controllers/connectDB")

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));


// async function sendWelcomeEmail() {
//   try {
//     var transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'soracine.service@gmail.com',
//         pass: 'soracine123'
//       }
//     });

//     var mailOptions = {
//       from: 'soracine.service@gmail.com',
//       to: 'burakburcak72@gmail.com',
//       subject: 'Welome to Sora Cine !',
//       text: 'Welcome to Sora Cine from Node'
//     };

//     const info = await transporter.sendMail(mailOptions);
//     console.log('Email sent:', info.response);
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// }

// sendWelcomeEmail();



app.get("/", (req, res) => {
  res.send("Hello World!");
});


//users
app.get("/user", getAllUsers);
app.get("/user/:id", getUserById);
app.post("/user", postUser);
app.delete("/user/:id", deleteUserById);
app.put("/user/:id", putUserById);

//deletedUsers
app.post("/deletedUsers", postDeletedUsers);

//login
app.post("/login", postLogin);
app.get("/login", getLogin);

//Contact
app.get("/contact", getContact);
app.post("/contact", postContact);

app.get("/series", async (req, res) => {
  try {
    const liste = await getAllSeries();
    res.send(liste);
  } catch (error) {
    console.error("Erreur lors de l'exécution de getSeries:", error);
    res.status(500).send("Erreur interne du serveur");
  }
});
app.get("/series/mystery", async (req, res) => {
  try {
    const liste = await getMystery();
    res.send(liste);
  } catch (error) {
    console.error("Erreur lors de l'exécution de getSeries:", error);
    res.status(500).send("Erreur interne du serveur");
  }
});
app.get("/series/crime", async (req, res) => {
  try {
    const liste = await getCrime();
    res.send(liste);
  } catch (error) {
    console.error("Erreur lors de l'exécution de getSeries:", error);
    res.status(500).send("Erreur interne du serveur");
  }
});
app.get("/series/fantasy", async (req, res) => {
  try {
    const liste = await getFantasy();
    res.send(liste);
  } catch (error) {
    console.error("Erreur lors de l'exécution de getSeries:", error);
    res.status(500).send("Erreur interne du serveur");
  }
});
app.get("/series/act_adv", async (req, res) => {
  try {
    const liste = await getActAdv();
    res.send(liste);
  } catch (error) {
    console.error("Erreur lors de l'exécution de getSeries:", error);
    res.status(500).send("Erreur interne du serveur");
  }
});
app.get("/series/comedy", async (req, res) => {
  try {
    const liste = await getComedy();
    res.send(liste);
  } catch (error) {
    console.error("Erreur lors de l'exécution de getSeries:", error);
    res.status(500).send("Erreur interne du serveur");
  }
});


mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

connectDB();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
