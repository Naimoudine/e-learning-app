const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/LessonActions");

router.get("/", browse);

module.exports = router;
