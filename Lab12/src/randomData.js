import { faker } from "@faker-js/faker";

const getUsers = (n = 5) => {
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

const getDogs = (n = 5) => {
  const dogs = [];

  for (let i = 0; i < n; i++) {
    dogs.push({
      name: faker.name.firstName(),
      age: faker.datatype.number({ min: 1, max: 18 }),
      breed: faker.animal.dog(),
    });
  }
  return dogs;
};

const getCats = (n = 5) => {
  const cats = [];

  for (let i = 0; i < n; i++) {
    cats.push({
      name: faker.name.firstName(),
      age: faker.datatype.number({ min: 1, max: 20 }),
      breed: faker.animal.cat(),
    });
  }
  return cats;
};

const getProducts = (n = 5) => {
  const products = [];

  for (let i = 0; i < n; i++) {
    products.push({
      name: faker.commerce.productName(),
      desciption: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      image: faker.image.business(),
    });
  }
  return products;
};

export { getUsers, getDogs, getCats, getProducts as getProduct };
