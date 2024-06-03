import pool from "../../database/config.js";

// posts
export const getAllPosts = async () => {
  try {
    const result = await pool.query("SELECT * FROM posts");
    return result.rows;
  } catch (err) {
    throw new Error(`Error fetching posts: ${err.message}`);
  }
};

//  nuevo post
export const addPost = async (titulo, url, descripcion) => {
  try {
    const result = await pool.query(
      "INSERT INTO posts (titulo, url, descripcion, likes) VALUES ($1, $2, $3, 0) RETURNING *",
      [titulo, url, descripcion]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Error adding post: ${err.message}`);
  }
};
