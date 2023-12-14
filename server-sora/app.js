const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const seriesModel = require("./models/series");
const { getSeries, getSeriesById } = require("./routes/series");
const { getAnimeData } = require("./controllers/api");
const { getContact, postContact } = require("./routes/constact");
const {
  getAllUsers,
  getUserById,
  postUser,
  deleteUserById,
  putUserById,
} = require("./routes/users");
const { postDeletedUsers } = require("./routes/deletedUsers");
const { getLogin, postLogin } = require("./routes/login");
require("dotenv").config();

app.use(express.json());
const port = 3200;

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

function connectDB() {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", err => {
    console.error("MongoDB connection error:", err);
  });
  db.once("open", () => {
    console.log("MongoDB connected successfully");
  });
  db.on("disconnected", () => {
    console.log("MongoDB disconnected");
  });
  process.on("SIGINT", () => {
    db.close(() => {
      console.log("MongoDB connection closed");
      process.exit(0);
    });
  });
}

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

//series

app.get("/series", getSeries);
app.get("/series/:id", getSeriesById);

//Contact

app.get("/contact", getContact);
app.post("/contact", postContact);

async function saveSeriesToDatabase() {
  const seriesData = await getAnimeData();

  for (const serie of seriesData) {
    try {
      const seriesInstance = new seriesModel({
        backdrop_path: serie.backdrop_path,
        first_air_date: new Date(serie.first_air_date),
        genre_ids: serie.genre_ids,
        id: serie.id,
        name: serie.name,
        origin_country: serie.origin_country,
        original_language: serie.original_language,
        original_name: serie.original_name,
        overview: serie.overview,
        popularity: serie.popularity,
        poster_path: serie.poster_path,
        vote_average: serie.vote_average,
        vote_count: serie.vote_count,
        url: serie.url,
      });

      await seriesInstance.save();
      console.log(`Série enregistrée dans la base de données: ${serie.name}`);
    } catch (error) {
      console.error(
        `Erreur lors de l'enregistrement de la série ${serie.name}:`,
        error
      );
      // Gérer l'erreur selon vos besoins
    }
  }
}

saveSeriesToDatabase();

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

connectDB();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
