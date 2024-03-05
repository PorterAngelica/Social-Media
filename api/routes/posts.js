import express from "express"
import {getPosts, addPost} from "../controllers/post.js"

const router = express.Router()

router.get("/post",getPosts ) 
router.post("/post",addPost ) 

export default router