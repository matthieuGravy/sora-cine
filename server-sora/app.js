const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const { getSeries, getSeriesById } = require("./routes/series");
const { getContact, postContact } = require("./routes/contact");
const {
  saveActionToDb,
  saveComedyToDb,
  saveCrimeToDb,
  saveFantasyToDb,
  saveMysteryToDb,
} = require("./controllers/genre");
const {
  getAllUsers,
  getUserById,
  postUser,
  deleteUserById,
  putUserById,
} = require("./routes/users");
const { postDeletedUsers } = require("./routes/deletedUsers");
const { getLogin, postLogin } = require("./routes/login");
const connectDB = require("./controllers/connectDB");
const saveSeriesToDatabase = require("./controllers/saveSeriesToDB.js");
require("dotenv").config();
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// const { postUsersToken } = require("./routes/AuthServ");

const port = 3200;

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//users
app.get("/user", getAllUsers);
app.get("/user/:id", getUserById);
app.post("/user", postUser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.delete("/user/:id", deleteUserById);
app.put("/user/:id", putUserById);

//deletedUsers
app.post("/deletedUsers", postDeletedUsers);

//login
app.post("/login", postLogin);
app.get("/login", getLogin);

//series
app.get("/series", getSeries);
app.get("/series/:id", getSeriesById);

//Contact
app.get("/contact", getContact);
app.post("/contact", postContact);

//genres
saveMysteryToDb();
saveActionToDb();
saveComedyToDb();
saveCrimeToDb();
saveFantasyToDb();
saveSeriesToDatabase();

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

connectDB();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
