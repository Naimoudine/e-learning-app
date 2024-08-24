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
      `SELECT
    c.*,
    (SELECT JSON_ARRAYAGG(
        JSON_OBJECT(
            'id', l.id,
            'title', l.title,
            'content', JSON_UNQUOTE(JSON_EXTRACT(l.content, '$'))
        )
    )
    FROM lesson l
    WHERE l.course_id = c.id) AS lessons
FROM 
    course c
WHERE 
    c.id = ?;
`,
      [id]
    );
    return rows[0];
  }
}

module.exports = CourseRepository;
