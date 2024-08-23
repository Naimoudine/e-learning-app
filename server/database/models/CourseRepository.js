const AbstractRepository = require("./AbstractRepository");

class CourseRepository extends AbstractRepository {
  constructor() {
    super({ table: "course" });
  }

  async readAll(query) {
    if (query) {
      const [rows] = await this.database.query(
        `select * from ${this.table} where category = ?`,
        [query]
      );
      return rows;
    }
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }
}

module.exports = CourseRepository;
