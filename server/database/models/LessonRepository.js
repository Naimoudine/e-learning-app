const AbstractRepository = require("./AbstractRepository");

class LessonRepository extends AbstractRepository {
  constructor() {
    super({ table: "lesson" });
  }

  async readAll(courseId) {
    const [rows] = await this.database.query(`select * from ${this.table}`, [
      courseId,
    ]);
    return rows;
  }
}

module.exports = LessonRepository;
