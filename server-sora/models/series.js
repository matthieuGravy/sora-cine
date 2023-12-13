const mongoose = require("mongoose")

const seriesSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    poster_path: {
      type: String,
      required: true,
    },
    backdrop_path: {
      type: String,
      required: true,
    },
    vote_average: {
      type: Number,
      required: true,
    },
    first_air_date: {
      type: Date,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "series" }
)

const seriesModel = mongoose.model("Series", seriesSchema)

module.exports = seriesModel
