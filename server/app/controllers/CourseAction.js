const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const courses = await tables.course.readAll(req.query.q);

    if (courses) {
      res.json(courses);
    } else {
      throw new Error("error while getting courses");
    }
  } catch (error) {
    next(error);
  }
};

const read = async (req, res, next) => {
  try {
    const course = await tables.course.read(req.params.courseId);
    if (course) {
      res.json(course);
    } else {
      throw new Error("error while getting courses");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { browse, read };
