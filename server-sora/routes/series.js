const mongoose = require("mongoose")
const { fetchTrendingTvShows } = require("../controllers/api")
const seriesModel = require("../models/series")

//get animation series

exports.getSeries = async (req, res) => {
  try {
    const series = await fetchTrendingTvShows()
    res.json({ success: true, message: series })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

//get animation series by id

exports.getSeriesById = async (req, res) => {
  try {
    const id = req.params.id
    console.log("ID:", id) // Ajoutez ceci pour afficher l'ID dans la console

    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid ObjectId") // Ajoutez ceci pour déboguer
      return res
        .status(400)
        .json({ success: false, message: "Invalid ObjectId" })
    }

    const series = await fetchTrendingTvShows.findById(id)

    if (!series) {
      console.log("Series not found") // Ajoutez ceci pour déboguer
      return res
        .status(404)
        .json({ success: false, message: "Series not found" })
    }

    res.json({ success: true, message: series })
  } catch (error) {
    console.error("Error:", error) // Ajoutez ceci pour déboguer
    res.status(500).json({ success: false, message: error.message })
  }
}

//post animation series

exports.PostSeries = async (req, res) => {
  try {
    const series = await seriesModel.create(req.body)
    res.json({ success: true, message: series })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}
