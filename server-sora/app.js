const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
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

const userSchema = new mongoose.Schema(
  {
    lastname: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ajoutez ceci pour définir l'attribut email comme unique
      validate: {
        validator: value => {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Invalid email address",
      },
    },
    password: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "users" }
);

const loginSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "logins" }
);

const userModel = mongoose.model("User", userSchema);
const loginModel = mongoose.model("Login", loginSchema);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//user

app.post("/user", async (req, res) => {
  try {
    const { password, ...userData } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({
      ...userData,
      password: hashedPassword,
    });
    const savedUser = await user.save();

    res.json({ success: true, message: savedUser });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ success: false, message: error.message });
    } else {
      res.status(500).json({ success: false, message: error.message });
    }
  }
});

//user

app.get("/user", async (req, res) => {
  try {
    const user = await userModel.find();
    res.json({ success: true, message: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

//user/:id/get

app.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("ID:", id); // Ajoutez ceci pour afficher l'ID dans la console

    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid ObjectId"); // Ajoutez ceci pour déboguer
      return res
        .status(400)
        .json({ success: false, message: "Invalid ObjectId" });
    }

    const user = await userModel.findById(id);

    if (!user) {
      console.log("User not found"); // Ajoutez ceci pour déboguer
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: user });
  } catch (error) {
    console.error("Error:", error); // Ajoutez ceci pour déboguer
    res.status(500).json({ success: false, message: error.message });
  }
});

//user/:id/delete

app.delete("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("ID:", id); // Ajoutez ceci pour afficher l'ID dans la console

    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid ObjectId"); // Ajoutez ceci pour déboguer
      return res
        .status(400)
        .json({ success: false, message: "Invalid ObjectId" });
    }

    const user = await userModel.findByIdAndDelete(id);

    if (!user) {
      console.log("User not found"); // Ajoutez ceci pour déboguer
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: user });
  } catch (error) {
    console.error("Error:", error); // Ajoutez ceci pour déboguer
    res.status(500).json({ success: false, message: error.message });
  }
});

//logins/get

app.get("/logins", async (req, res) => {
  try {
    const logins = await loginModel.find();
    res.json({ success: true, message: logins });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

//logins/post

app.post("/logins", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Étape 1: Vérifier si l'email existe dans la collection "users"
    const user = await userModel.findOne({ email });

    if (!user) {
      // Email non trouvé
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password." });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    // Étape 2: Vérifier si le mot de passe est correct
    if (!validPassword) {
      // Mot de passe incorrect
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password." });
    }

    // Étape 3: Ajouter l'enregistrement dans la collection "logins"
    const login = new loginModel({ email, password });

    const savedLogin = await login.save();

    res.json({
      success: true,
      message: "Login successful!",
      login: savedLogin,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

//VideoModel

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    synopsis: {
      type: String,
    },
    url: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "videos" }
);

const videoModel = mongoose.model("Video", videoSchema);

//Videos/post

app.post("/videos", async (req, res) => {
  try {
    const video = new videoModel(req.body);
    const savedVideo = await video.save();
    res.json({ success: true, message: savedVideo });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ success: false, message: error.message });
    } else {
      res.status(500).json({ success: false, message: error.message });
    }
  }
});

//videos/get

app.get("/videos", async (req, res) => {
  try {
    const videos = await videoModel.find();
    res.json({ success: true, message: videos });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

//videos/:id/put

app.put("/videos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log("ID:", id); // Ajoutez ceci pour afficher l'ID dans la console

    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid ObjectId"); // Ajoutez ceci pour déboguer
      return res
        .status(400)
        .json({ success: false, message: "Invalid ObjectId" });
    }

    const video = await videoModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!video) {
      console.log("Video not found"); // Ajoutez ceci pour déboguer
      return res
        .status(404)
        .json({ success: false, message: "Video not found" });
    }

    res.json({ success: true, message: video });
  } catch (error) {
    console.error("Error:", error); // Ajoutez ceci pour déboguer
    res.status(500).json({ success: false, message: error.message });
  }
});

//videos/:category/get

app.get("/videos/:category", async (req, res) => {
  try {
    const categoryParam = req.params.category;

    // Utilize the videoModel to search for videos by category
    const videos = await videoModel.find({ category: categoryParam });

    if (!videos || videos.length === 0) {
      return res
        .status(404)
        .json({ message: "Aucune vidéo trouvée pour cette catégorie." });
    }

    // Send the videos as a response
    res.status(200).json(videos);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur serveur lors de la récupération des vidéos." });
  }
});

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
);

const contactModel = mongoose.model("Contact", contactSchema);

//contact/post

app.post("/contact", async (req, res) => {
  try {
    const contact = new contactModel(req.body);
    const savedContact = await contact.save();
    res.json({ success: true, message: savedContact });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ success: false, message: error.message });
    } else {
      res.status(500).json({ success: false, message: error.message });
    }
  }
});

//contact/get

app.get("/contact", async (req, res) => {
  try {
    const contact = await contactModel.find();
    res.json({ success: true, message: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

connectDB();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
