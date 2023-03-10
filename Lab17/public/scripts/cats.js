console.log("Hello from cats.js");

let freeze_button = document.getElementById("freeze-button");
let img = document.getElementById("cat-img");
freeze_button.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("Clicked freeze button");
  await fetch("/cats/freeze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ img: img.src }),
  });
  window.location.reload();
});
