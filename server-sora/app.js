const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
const { getSeries, getSeriesById, PostSeries } = require("./routes/series")
const {
  getAllUsers,
  getUserById,
  postUser,
  deleteUserById,
  putUserById,
} = require("./routes/users")
const { getLogin, postLogin } = require("./routes/login")
require("dotenv").config()

app.use(express.json())
const port = 3200

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
}

app.use(cors(corsOptions))

function connectDB() {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = mongoose.connection
  db.on("error", (err) => {
    console.error("MongoDB connection error:", err)
  })
  db.once("open", () => {
    console.log("MongoDB connected successfully")
  })
  db.on("disconnected", () => {
    console.log("MongoDB disconnected")
  })
  process.on("SIGINT", () => {
    db.close(() => {
      console.log("MongoDB connection closed")
      process.exit(0)
    })
  })
}

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

//deletedUsers/post

app.post("/deletedUsers", async (req, res) => {
  try {
    const deletedUsers = await userModel.find()
    res.json({ success: true, message: deletedUsers })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

//login

app.post("/login", postLogin)
app.get("/login", getLogin)

//series

app.get("/series", getSeries)
app.get("/series/:id", getSeriesById)
app.post("/series", PostSeries)

//contact form

//contactSchema

const contactSchema = new mongoose.Schema(
  {
    lastname: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
    },
    content: {
      type: String,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "contacts" }
)

const contactModel = mongoose.model("Contact", contactSchema)

//contact/post

app.post("/contact", async (req, res) => {
  try {
    const contact = new contactModel(req.body)
    const savedContact = await contact.save()
    res.json({ success: true, message: savedContact })
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ success: false, message: error.message })
    } else {
      res.status(500).json({ success: false, message: error.message })
    }
  }
})

//contact/get

app.get("/contact", async (req, res) => {
  try {
    const contact = await contactModel.find()
    res.json({ success: true, message: contact })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
})

connectDB()

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
