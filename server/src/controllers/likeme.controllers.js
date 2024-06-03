import pool from "../../database/config.js";

export const getPosts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addPost = async (req, res) => {
  const { titulo, url, descripcion } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO posts (titulo, url, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *",
      [titulo, url, descripcion]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
