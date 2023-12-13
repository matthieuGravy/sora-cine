const modelUser = require("../models/users")
const bcrypt = require("bcrypt")

//user/post

exports.postUser = async (req, res) => {
  try {
    const { password, ...userData } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new modelUser({
      ...userData,
      password: hashedPassword,
    })
    const savedUser = await user.save()

    res.json({ success: true, message: savedUser })
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ success: false, message: error.message })
    } else {
      res.status(500).json({ success: false, message: error.message })
    }
  }
}

//user/get

exports.getAllUsers = async (req, res) => {
  try {
    const user = await userModel.find()
    res.json({ success: true, message: user })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

//user/:id/get

exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id
    console.log("ID:", id) // Ajoutez ceci pour afficher l'ID dans la console

    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid ObjectId") // Ajoutez ceci pour déboguer
      return res
        .status(400)
        .json({ success: false, message: "Invalid ObjectId" })
    }

    const user = await userModel.findById(id)

    if (!user) {
      console.log("User not found") // Ajoutez ceci pour déboguer
      return res.status(404).json({ success: false, message: "User not found" })
    }

    res.json({ success: true, message: user })
  } catch (error) {
    console.error("Error:", error) // Ajoutez ceci pour déboguer
    res.status(500).json({ success: false, message: error.message })
  }
}

//user/:id/delete

exports.deleteUserById = async (req, res) => {
  try {
    const id = req.params.id
    console.log("ID:", id) // Ajoutez ceci pour afficher l'ID dans la console

    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid ObjectId") // Ajoutez ceci pour déboguer
      return res
        .status(400)
        .json({ success: false, message: "Invalid ObjectId" })
    }

    const user = await userModel.findByIdAndDelete(id)

    if (!user) {
      console.log("User not found") // Ajoutez ceci pour déboguer
      return res.status(404).json({ success: false, message: "User not found" })
    }

    res.json({ success: true, message: user })
  } catch (error) {
    console.error("Error:", error) // Ajoutez ceci pour déboguer
    res.status(500).json({ success: false, message: error.message })
  }
}

//user/:id/put

exports.putUserById = async (req, res) => {
  try {
    const id = req.params.id
    console.log("ID:", id)

    let user = await userModel.findById(id)

    if (!user) {
      console.log("User not found")
      return res.status(404).json({ success: false, message: "User not found" })
    }

    // Mettez à jour les propriétés du document utilisateur avec les nouvelles données de la requête
    user = await userModel.findByIdAndUpdate(id, req.body, { new: true })

    res.json({ success: true, message: user })
  } catch (error) {
    console.error("Error:", error)
    res.status(500).json({ success: false, message: error.message })
  }
}
