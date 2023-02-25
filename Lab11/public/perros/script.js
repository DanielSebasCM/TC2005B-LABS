const btn = document.getElementById("btn");
const perroImg = document.getElementById("perro");

fetch("https://api.thedogapi.com/v1/images/search").then((response) => {
  response.json().then((image) => {
    perroImg.src = image[0].url;
  });
});

btn.addEventListener("click", async () => {
  let response = await fetch("https://api.thedogapi.com/v1/images/search");
  let image = await response.json();
  perroImg.src = image[0].url;
});
