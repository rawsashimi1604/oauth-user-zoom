import express from "express";
import { configDotenv } from "dotenv";
import ZoomService from "./ZoomService.js";

// Load environment variables into process.env
configDotenv();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  ZoomService.authorizeUser();
  res.json({ message: "hello world" });
});

app.listen(port, () => {
  console.log("started listening on port " + port);
});
