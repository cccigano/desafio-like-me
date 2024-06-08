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

// Actualizar likes de un post
export const likePost = async (req, res) => {
  const { id } = req.params;
  try {
    // Incrementar likes
    const result = await pool.query(
      "UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rowCount === 0) {
      res.status(404).json({ error: "Post no encontrado" });
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    res.status(500).json({ error: `Error actualizando likes: ${err.message}` });
  }
};

// Eliminar un post
export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    // Eliminar post
    const result = await pool.query(
      "DELETE FROM posts WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rowCount === 0) {
      res.status(404).json({ error: "Post no encontrado" });
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    res.status(500).json({ error: `Error eliminando post: ${err.message}` });
  }
};

