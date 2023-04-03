const express = require ('express')
const about = require ('../controllers/about.js');

const router = express.Router();


router.get("/", about.getAbout)
router.get("/:id", about.getPost)
router.post("/", about.addPost)
router.delete("/:id", about.deletePost)
router.put("/:id", about.updatePost)

module.exports = router;