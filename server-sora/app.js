const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

app.use(express.json());
const port = 3200;

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
    id: {
      type: Number,
      required: true,
      _id: false,
    },
    name: {
      type: String,
      required: true,
    },
    firstName: {
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
    res.status(500).json({ success: false, message: error.message });
  }
});

app.get("/user", async (req, res) => {
  try {
    user = await userModel.find();
    res.json({ success: true, message: user });
  } catch (error) {
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
