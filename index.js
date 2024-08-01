import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";

const app = express();
dotenv.config();
conectarDB();

app.use("/", (req, res) => {
  res.send("Hola Mario Rivera");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`servidor funcionando eln el servidor ${PORT}`);
});
