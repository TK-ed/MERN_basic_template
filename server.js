// imports
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";
import axios from "axios";
dotenv.config();
const app = express();

// declarations
const port = process.env.PORT;
const db = process.env.MONG_URI;
const link = "https://www.boredapi.com/api/activity";

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", router);

// routes
app.get("/", (req, res) => {
  res.status(200).send("Created app!!");
});

app.get('/bored', async (req, res) => {
  try {
    const response = await axios.get('https://www.boredapi.com/api/activity');
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the API' });
  }
});

// db connection
mongoose.connect(db).then(() => {
  app.listen(port, () => {
    console.log(`Connected to db and Listenin' on port ${port}`);
  });
});
