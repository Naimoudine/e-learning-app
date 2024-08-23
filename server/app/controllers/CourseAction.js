const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const courses = await tables.course.readAll();
    if (courses) {
      res.json(courses);
    } else {
      throw new Error("error while getting courses");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { browse };
