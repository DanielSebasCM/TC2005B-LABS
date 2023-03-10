import { faker } from "@faker-js/faker";
import db from "../utils/db.js";

const randUsers = (n = 5) => {
  const users = [];
  for (let i = 0; i < n; i++) {
    users.push({
      name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      email: faker.internet.email(),
      age: faker.datatype.number({ min: 18, max: 80 }),
    });
  }
  return users;
};

const getUsers = async () => {
  let users = (await db.execute(`SELECT * FROM user`))[0];

  if (users.length === 0) {
    users = randUsers();
    users.forEach(async (user) => {
      await createUser(user);
    });
  }

  users = (await db.execute(`SELECT * FROM user`))[0];

  return users;
};

const createUser = async (user) => {
  if (!user.email || !user.name || !user.last_name || !user.age) {
    throw new Error("Faltan campos");
  }

  let result = await db.execute(
    `INSERT INTO user (name, last_name, email, age) VALUES (?, ?, ?, ?)`,
    [user.name, user.last_name, user.email, user.age]
  );

  return result;
};

const deleteUserById = async (uid) => {
  let result = await db.execute(`DELETE FROM user WHERE id = ?`, [uid]);
  return result;
};

export { randUsers, getUsers, createUser, deleteUserById };
