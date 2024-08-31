const express = require("express");

const router = express.Router();

const {
  browse,
  browseLessons,
  read,
} = require("../../../controllers/CourseAction");

router.get("/", browse);
router.get("/:courseId", read);
router.get("/:courseId/lessons", browseLessons);

module.exports = router;
