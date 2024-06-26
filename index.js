import express from "express";
import "dotenv/config";
import cors from "cors";
import characters from "./src/routes/characters.js";
import races from "./src/routes/races.js";

const port = process.env.PORT ?? 3001;

const app = express();
app.use(express.json());
app.use(cors());

const router = express.Router();
router.use("/characters", characters);
router.use("/races", races);
app.use(router);

app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}.`);
});
