const connection = require('../app/database');

class CommentService {
  async create(content, userId, momentId) {
    const statement = `INSERT INTO comment(content,user_id,moment_id) VALUES(?,?,?)`;
    const [result] = await connection.execute(statement, [content, userId, momentId]);

    return result;
  }
  async reply(content, userId, momentId, commentId) {
    const statement = `INSERT INTO comment(content,user_id,moment_id,comment_id) VALUES(?,?,?,?)`;
    const [result] = await connection.execute(statement, [content, userId, momentId, commentId]);

    return result;
  }
}

module.exports = new CommentService();
