const btn = document.getElementById("btn");
const gatoImg = document.getElementById("gato");

fetch("https://api.thecatapi.com/v1/images/search").then((response) => {
  response.json().then((image) => {
    gatoImg.src = image[0].url;
  });
});

btn.addEventListener("click", async () => {
  let response = await fetch("https://api.thecatapi.com/v1/images/search");
  let image = await response.json();
  gatoImg.src = image[0].url;
});
