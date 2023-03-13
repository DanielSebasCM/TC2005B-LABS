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

const getCatImg = async () => {
  const response = await fetch(
    "https://thecatapi.com/api/images/get?format=src&type=gif"
  );
  return response.url;
};

export { randCats, getCatImg };
