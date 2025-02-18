// Application Programming Interface
//POST, GET, PUT, DELETE
//CRUD - Create Read Update Delete
import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors());
//app.use(express.json());

app.get("/", (request, response) => {
  response.send("So vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artist").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor esta escutando na porta ${PORT}`);
});
