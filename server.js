// imports
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from './routes/userRoutes.js'
const app = express();

// declarations
const port = process.env.PORT;
const db = process.env.MONG_URI;

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router)

// routes
app.get("/", (req, res) => {
  res.status(200).send("Created app!!");
});

// db connection
mongoose.connect(db).then(() => {
  app.listen(port, () => {
    console.log(`Connected to db and Listenin' on port ${port}`);
  });
});
