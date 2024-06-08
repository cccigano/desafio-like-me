import express from "express";
import { getPosts, addPost, likePost, deletePost } from "../controllers/likeme.controllers.js";

const router = express.Router();

router.get("/posts", getPosts);
router.post("/posts", addPost);
router.put("/posts/like/:id", likePost);  
router.delete("/posts/:id", deletePost);
export default router;
