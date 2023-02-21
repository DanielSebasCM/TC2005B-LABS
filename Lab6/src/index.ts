import { faker } from "@faker-js/faker";

const cards = document.querySelectorAll(".card");
const cartRows = document.querySelectorAll(".talbe-row");
const cartTotal = document
  .querySelector(".talbe-footer")!
  .querySelector(".total")!;

type CardContent = {
  title: string;
  description: string;
  price: number;
  image: string;
  ammount: number;
};

const cardContents: CardContent[] = [];

for (let i = 0; i < cards.length; i++) {
  cardContents.push({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    image: faker.image.image(),
    ammount: 0,
  });
}

cards.forEach((card, i) => {
  card.querySelector(".title")!.textContent = cardContents[i].title;
  card.querySelector(".description")!.textContent = cardContents[i].description;
  card.querySelector(".price")!.textContent = `$ ${cardContents[i].price}`;
  card
    .querySelectorAll("img")
    .forEach((img) => (img.src = cardContents[i].image));

  card.querySelector("input")!.addEventListener("change", (e) => {
    const input = e.target as HTMLInputElement;
    cardContents[i].ammount = parseInt(input.value);
    updateCart();
  });
});

cartRows.forEach((row, i) => {
  row.querySelector(".name")!.textContent = cardContents[i].title;
  row.querySelector(".price")!.textContent = `$ ${cardContents[i].price}`;
  row.querySelector(".ammount")!.textContent = `${cardContents[i].ammount}`;
  row.querySelector(".total")!.textContent = `$ ${
    cardContents[i].ammount * cardContents[i].price
  }`;
});

function updateCart() {
  cartRows.forEach((row, i) => {
    row.querySelector(".ammount")!.textContent = `${cardContents[i].ammount}`;
    row.querySelector(".total")!.textContent = `$ ${
      cardContents[i].ammount * cardContents[i].price
    }`;
  });

  cartTotal.textContent = `$ ${cardContents.reduce(
    (acc, cur) => acc + cur.ammount * cur.price,
    0
  )}`;
}
