const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = 3200;

function connectDB() {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("error", (err) => {
    console.log("MongoDB connection error:", err);
  });
}

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

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

mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

connectDB();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
