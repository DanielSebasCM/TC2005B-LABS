import { faker } from "@faker-js/faker";

const randDogs = (n = 5) => {
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

export { randDogs };
