const axios = require("axios");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const apiKey = process.env.MOVIE_DB_API_KEY;

if (!apiKey) {
  console.error("La clé d'API TMDB_API_KEY est manquante dans le fichier .env");
  process.exit(1);
}

const db = mongoose.connection;
db.on("error", error => {
  console.error("Erreur de connexion à la base de données:", error);
  process.exit(1);
});
db.once("open", () => {
  console.log("Connexion à la base de données établie avec succès");
});

const fetchTvUrl = "https://api.themoviedb.org/3/trending/tv/day?";

const fetchTrendingTvShows = async () => {
  try {
    const trendingTvResponse = await axios.get(fetchTvUrl, {
      params: {
        api_key: apiKey,
      },
    });
    const trendingTvData = trendingTvResponse.data.results;
    console.log("Trending TV Shows:", trendingTvData);

    return trendingTvData;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

// Appeler la fonction fetchTrendingTvShows
fetchTrendingTvShows();

module.exports = { fetchTrendingTvShows };

// const fetch = require("node-fetch");
// const dotenv = require("dotenv");

// dotenv.config();

// fetchTVShows = async () => {
//   const url = "https://api.themoviedb.org/3/trending/tv/day?language=en-US";
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGUzN2E4MTljODU2YWZmNTFkNmVmZDExMTRkMzUzNCIsInN1YiI6IjY1NzJmMjhmMWM2MzViMDEzNzY0ODZjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZTkQ4-T9BWqYWI-aJ1NiL0plRBct5IrQvTBFc4dyV2c",
//     },
//   };

//   fetch(url, options)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error("error:" + err));
// };

// fetchTVShows();

// module.exports = { fetchTVShows };
