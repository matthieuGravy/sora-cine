require('dotenv').config();

module.exports = {
  mongoURI:
    process.env.MONGO_URI,
  tmdbApiKey: process.env.TMDB_API_KEY,

  
};

