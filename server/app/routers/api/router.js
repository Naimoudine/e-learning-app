const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

// midlewares
const { hashPassword } = require("../../services/auth");

// signup
const { add } = require("../../controllers/UserActions");

router.use("/signup", hashPassword, add);

// signup
const { login } = require("../../controllers/AuthActions");

router.post("/signin", login);

// courses
const coursesRouter = require("./courses/router");

router.use("/courses", coursesRouter);

/* ************************************************************************* */

module.exports = router;
