const form = document.querySelector("#user-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.elements["name"].value;
  const lastname = form.elements["lastname"].value;
  const email = form.elements["email"].value;
  const age = form.elements["age"].value;

  fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      lastname,
      email,
      age,
    }),
  });
});
