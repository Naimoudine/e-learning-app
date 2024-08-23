const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/CourseAction");

router.get("/", browse);

module.exports = router;
