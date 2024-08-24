const tables = require("../../database/tables");

const add = async (req, res, next) => {
  try {
    const userExists = tables.user.readByEmail(req.body.email);

    if (userExists) {
      res.status(409).json({ message: "Email already taken, please log in." });
      return;
    }

    const insertId = tables.user.create(req.body);

    res.status(201).json(insertId);
  } catch (error) {
    next(error);
  }
};

module.exports = { add };
