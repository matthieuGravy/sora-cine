const loginModel = require("../models/login")
const modelUser = require("../models/users")

//login

//logins/get

exports.getLogin = async (req, res) => {
  try {
    const logins = await loginModel.find()
    res.json({ success: true, message: logins })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

//logins/post

exports.postLogin = async (req, res) => {
  const { email, password } = req.body

  try {
    // Étape 1: Vérifier si l'email existe dans la collection "users"
    const user = await modelUser.findOne({ email })

    if (!user) {
      // Email non trouvé
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password." })
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    // Étape 2: Vérifier si le mot de passe est correct
    if (!validPassword) {
      // Mot de passe incorrect
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password." })
    }

    // Étape 3: Ajouter l'enregistrement dans la collection "logins"
    const login = new loginModel({ email, password })

    const savedLogin = await login.save()

    res.json({
      success: true,
      message: "Login successful!",
      login: savedLogin,
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}
