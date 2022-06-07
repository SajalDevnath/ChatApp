const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/Db");
const userRoutes = require("./routes/userRoutes");
var bodyParser = require("body-parser");
var urlEncoded = bodyParser.urlencoded({ extended: false });

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); //to accept JSON data
app.use(urlEncoded);

app.get("/", (req, res) => {
  res.send("Api is running succesfully");
});

app.use("/", userRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Started on port ${PORT}`));
