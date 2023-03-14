const deleteBtns = Array.from(document.getElementsByClassName("delete"));
const addUserForm = document.getElementById("add-user");

addUserForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const inputs = event.target.getElementsByTagName("input");

  const name = inputs["name"].value;
  const last_name = inputs["lastName"].value;
  const email = inputs["email"].value;
  const age = inputs["age"].value;
  const password = inputs["password"].value;

  if (name === "" || last_name === "" || email === "" || age === "") {
    alert("Todos los campos son obligatorios");
    return;
  }

  const res = await fetch("/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      last_name,
      email,
      age,
      password,
    }),
  });
  if (res.ok) {
    window.location.reload();
  } else {
    alert("No se pudo agregar el usuario");
  }
});

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", async (event) => {
    const uid = event.target.dataset.uid;

    const res = await fetch(`/users/${uid}`, {
      method: "DELETE",
    });

    console.log(res);
    window.location.reload();
  });
});
