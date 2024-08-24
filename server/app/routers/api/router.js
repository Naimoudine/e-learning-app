const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const coursesRouter = require("./courses/router");

router.use("/courses", coursesRouter);

/* ************************************************************************* */

module.exports = router;
