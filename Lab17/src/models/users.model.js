import db from "../utils/db.js";

class User {
  constructor(user) {
    User.verify(user);

    this.id = user.id || null;
    this.name = user.name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.age = user.age;
  }

  static async getById(id) {
    let [user, _] = await db.execute(`SELECT * FROM user WHERE id = ?`, [id]);
    return new User(user[0]);
  }

  static getByEmail(email) {
    let [user, _] = db.execute(`SELECT * FROM user WHERE email = ?`, [email]);
    return new User(user[0]);
  }

  static async getAll() {
    let [users, _] = await db.execute(`SELECT * FROM user`);
    return users.map((user) => new User(user));
  }

  static verify(user) {
    if (!user.name) throw new Error("Name is required");
    if (!user.last_name) throw new Error("Last name is required");
    if (!user.email) throw new Error("Email is required");
    if (!user.age) throw new Error("Age is required");
    return true;
  }

  async post() {
    const res = await db.execute(
      `INSERT INTO user (name, last_name, email, age) VALUES (?, ?, ?, ?)`,
      [this.name, this.last_name, this.email, this.age]
    );
    this.id = res[0].insertId;
    return res;
  }

  delete() {
    return db.execute(`DELETE FROM user WHERE id = ?`, [this.id]);
  }
}

export default User;
