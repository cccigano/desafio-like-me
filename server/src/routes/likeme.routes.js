import express from "express";
import { getPosts, addPost } from "../controllers/likeme.controllers.js";

const router = express.Router();

router.get("/posts", getPosts);
router.post("/posts", addPost);

export default router;
