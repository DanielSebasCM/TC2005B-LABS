import db from "../utils/db.js";
import bcrypt from "bcryptjs";

class User {
  constructor(user) {
    User.verify(user);

    this.id = user.id || null;
    this.name = user.name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.age = user.age;
    this.password = user.password;
  }

  static async getById(id) {
    let [user, _] = await db.execute(`SELECT * FROM user WHERE id = ?`, [id]);
    if (!user[0]) return null;
    return new User(user[0]);
  }

  static async getByEmail(email) {
    let [user, _] = await db.execute(`SELECT * FROM user WHERE email = ?`, [
      email,
    ]);
    if (!user[0]) return null;
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
    if (!user.password) throw new Error("Password is required");
    return true;
  }

  async post() {
    this.password = await bcrypt.hash(this.password, 12);

    const [res, _] = await db.execute(
      `INSERT INTO user (name, last_name, email, age, password) VALUES (?, ?, ?, ?, ?)`,
      [this.name, this.last_name, this.email, this.age, this.password]
    );
    console.log(res);
    this.id = res.insertId;
    return res;
  }

  delete() {
    return db.execute(`DELETE FROM user WHERE id = ?`, [this.id]);
  }
}

export default User;
