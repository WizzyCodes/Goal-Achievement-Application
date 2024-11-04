import express, { Application } from "express";
import cors from "cors";
import { mainApp } from "./mainApp";
import { dbConfig } from "./utils/dbConfig";

const port: number = 2222;
const app: Application = express();

app.use(express.json());
app.use(cors());

mainApp(app);
app.listen(port, () => {
  console.clear();
  dbConfig();
});
