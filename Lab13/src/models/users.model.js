import { faker } from "@faker-js/faker";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const usersPath = "users.json";
const userDir = path.join(__dirname, usersPath);

const randUsers = (n = 5) => {
  const users = [];

  for (let i = 0; i < n; i++) {
    users.push({
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      age: faker.datatype.number({ min: 18, max: 80 }),
    });
  }
  return users;
};

const getUsers = () => {
  if (!fs.existsSync(userDir)) {
    fs.writeFileSync(userDir, "[]");
  }

  let users = JSON.parse(fs.readFileSync(userDir));
  if (users.length === 0) {
    let users = randUsers(5);
    fs.writeFileSync(userDir, JSON.stringify(users));
  }

  return users;
};

const createUser = (user) => {
  if (!user.email || !user.name || !user.lastName || !user.age) {
    throw new Error("Faltan campos");
  }

  let users = [];

  if (fs.existsSync(userDir)) {
    users = JSON.parse(fs.readFileSync(userDir));
  }

  users.push({
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    age: user.age,
  });

  fs.writeFileSync(userDir, JSON.stringify(users));

  res.status(201).send("Usuario agregado");
};

const deleteUser = (user_to_delete) => {
  if (!fs.existsSync(userDir)) {
    throw new Error("No existe el archivo");
  }

  if (
    !user_to_delete.email ||
    !user_to_delete.name ||
    !user_to_delete.lastName ||
    !user_to_delete.age
  ) {
    throw new Error("Faltan campos");
  }

  const users = JSON.parse(fs.readFileSync(userDir));
  const filteredUsers = users.filter((user) => {
    return (
      user_to_delete.email !== user.email &&
      user_to_delete.name !== user.name &&
      user_to_delete.lastName !== user.lastName &&
      user_to_delete.age != user.age
    );
  });
  fs.writeFileSync(userDir, JSON.stringify(filteredUsers));
};

export { randUsers, getUsers, createUser, deleteUser };
