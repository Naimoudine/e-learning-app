const AbstractRepository = require("./AbstractRepository");

class CourseRepository extends AbstractRepository {
  constructor() {
    super({ table: "course" });
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }
}

module.exports = CourseRepository;
