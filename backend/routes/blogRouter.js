const { getBlogs } = require("../controllers/blogController");

const router = require("express").Router();

router.get("/search", getBlogs);


module.exports = router;