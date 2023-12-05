const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

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

const userModel = mongoose.model("User", userSchema);

app.post("/user", async (req, res) => {
  try {
    const user = new userModel(req.body);
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

app.get("/user", async (req, res) => {
  try {
    const user = await userModel.find();
    res.json({ success: true, message: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

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

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

connectDB();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
