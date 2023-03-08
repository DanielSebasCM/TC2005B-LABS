import { faker } from "@faker-js/faker";

const randCats = (n = 5) => {
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

export { randCats };
