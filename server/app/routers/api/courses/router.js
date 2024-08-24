const express = require("express");

const router = express.Router();

const { browse, read } = require("../../../controllers/CourseAction");

router.get("/", browse);
router.get("/:courseId", read);

module.exports = router;
