import pg from "pg";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const { Pool } = pg;
const pool = new Pool({connectionString: process.env.DATABASE_URL});

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/media", async (req, res) => {
  try{
    let result = await pool.query('SELECT * FROM media')
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({message:`Something went wrong: ${err}`})
  }
});

app.get("/api/media/:product_id", async (req, res) => {
  let id = req.params.product_id;
  try{
    let result = await pool.query(`SELECT * FROM media WHERE product_id = $1 order by id`, [id])
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({message:`Something went wrong: ${err}`})
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});