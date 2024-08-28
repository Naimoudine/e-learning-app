const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const dayjs = require("dayjs");
const tables = require("../../database/tables");

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmail(req.body.email);

    if (!user) {
      res.status(422).json({
        message:
          "We couldn't find an account matching the email and password you entered. Please check your email and password and try again.",
      });
    }

    const verifyPassword = argon2.verify(
      user.hashed_password,
      req.body.password
    );

    if (!verifyPassword) {
      res.status(422).json({
        message:
          "We couldn't find an account matching the email and password you entered. Please check your email and password and try again.",
      });
    }

    const token = jwt.sign(
      { sub: user.id, role: user.role },
      process.env.APP_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("auth_token", token, {
      secure: process.env.NODE_ENV !== "development",
      httpOnly: true,
      expires: dayjs().add(30, "days").toDate(),
    });

    delete user.hashed_password;

    res.json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
