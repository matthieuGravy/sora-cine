const mongoose = require("mongoose")

const seriesSchema = new mongoose.Schema(
  {
    backdrop_path: {
      type: String,
      required: true
    },
    first_air_date: {
      type: Date,
      required: true
    },
    genre_ids: {
      type: [Number],
      required: true
    },
    id: {
      type: Number,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    origin_country: {
      type: [String],
      required: true
    },
    original_language: {
      type: String,
      required: true
    },
    original_name: {
      type: String,
      required: true
    },
    overview: {
      type: String,
      required: true
    },
    popularity: {
      type: Number,
      required: true
    },
    poster_path: {
      type: String,
      required: true
    },
    vote_average: {
      type: Number,
      required: true
    },
    vote_count: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  { collection: "series" }
)

const seriesModel = mongoose.model("Series", seriesSchema)

module.exports = seriesModel
