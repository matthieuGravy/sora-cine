const express = require("express")
const mongoose = require("mongoose")
const app = express()
const {
  getCrime,
  getFantasy,
  getActAdv,
  getComedy,
  getMystery,
  getAllSeries,
} = require("./models/genres")
const cors = require("cors")
const { getContact, postContact } = require("./routes/contact")
const {
  getAllUsers,
  getUserById,
  postUser,
  deleteUserById,
  putUserById,
} = require("./routes/users")
const { postDeletedUsers } = require("./routes/deletedUsers")
const { getLogin, postLogin } = require("./routes/login")
require("dotenv").config()
app.use(express.json())
const port = 3200
const nodemailer = require("nodemailer")
const connectDB = require("./controllers/connectDB")
const { userModel } = require("./models/users")

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
}
app.use(cors(corsOptions))

// async function sendWelcomeEmail(email) {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "soracine.service@gmail.com",
//         pass: "wywc gtrb elkw deew", // Remplacez par le mot de passe d'application généré
//       },
//     })

//     const mailOptions = {
//       from: "soracine.service@gmail.com",
//       to: email,
//       subject: "Bienvenue sur Sora Cine !",
//       text: "Bienvenue sur Sora Cine depuis Node",
//     }

//     const info = await transporter.sendMail(mailOptions)
//     console.log("E-mail envoyé :", info.response)
//   } catch (error) {
//     console.error("Erreur lors de l'envoi de l'e-mail :", error)
//   }
// }

// module.exports = sendWelcomeEmail


app.get("/", (req, res) => {
  res.send("Hello World!")
})

//users
app.get("/user", getAllUsers)
app.get("/user/:id", getUserById)
app.post("/user", postUser)
app.delete("/user/:id", deleteUserById)
app.put("/user/:id", putUserById)

//deletedUsers
app.post("/deletedUsers", postDeletedUsers)

//login
app.post("/login", postLogin)
app.get("/login", getLogin)

//Contact
app.get("/contact", getContact)
app.post("/contact", postContact)

app.get("/series", async (req, res) => {
  try {
    const liste = await getAllSeries()
    res.send(liste)
  } catch (error) {
    console.error("Erreur lors de l'exécution de getSeries:", error)
    res.status(500).send("Erreur interne du serveur")
  }
})
app.get("/series/mystery", async (req, res) => {
  try {
    const liste = await getMystery()
    res.send(liste)
  } catch (error) {
    console.error("Erreur lors de l'exécution de getSeries:", error)
    res.status(500).send("Erreur interne du serveur")
  }
})
app.get("/series/crime", async (req, res) => {
  try {
    const liste = await getCrime()
    res.send(liste)
  } catch (error) {
    console.error("Erreur lors de l'exécution de getSeries:", error)
    res.status(500).send("Erreur interne du serveur")
  }
})
app.get("/series/fantasy", async (req, res) => {
  try {
    const liste = await getFantasy()
    res.send(liste)
  } catch (error) {
    console.error("Erreur lors de l'exécution de getSeries:", error)
    res.status(500).send("Erreur interne du serveur")
  }
})
app.get("/series/act_adv", async (req, res) => {
  try {
    const liste = await getActAdv()
    res.send(liste)
  } catch (error) {
    console.error("Erreur lors de l'exécution de getSeries:", error)
    res.status(500).send("Erreur interne du serveur")
  }
})
app.get("/series/comedy", async (req, res) => {
  try {
    const liste = await getComedy()
    res.send(liste)
  } catch (error) {
    console.error("Erreur lors de l'exécution de getSeries:", error)
    res.status(500).send("Erreur interne du serveur")
  }
})

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})

connectDB()

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

