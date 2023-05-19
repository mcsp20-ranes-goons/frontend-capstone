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
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.get("/api/specs_min/:id", async (req, res) => {
  try {
    let result = await pool.query('SELECT * FROM specs_min WHERE "product_Id" = $1', [req.params.id]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: `Something went wrong: ${err}` });
  }
});

app.get("/api/specs_rec/:id", async (req, res) => {
  try {
    let result = await pool.query('SELECT * FROM specs_rec WHERE "product_Id" = $1', [req.params.id]);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: `Something went wrong: ${err}` });
  }
});

app.listen(process.env.PORT || 3004, () => {
  console.log(`Server listening on port ${process.env.PORT || 3004}`);
});
