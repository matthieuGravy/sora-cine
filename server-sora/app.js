const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());
const port = 3200;

function connectDB() {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", (err) => {
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
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
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
/*
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/user", (req, res) => {
  const user = new User(age, name);
  user.save((err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data);
  });
});

app.get("/user/:id", (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data);
  });
});
*/

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

connectDB();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
