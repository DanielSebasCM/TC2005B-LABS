const deleteBtns = Array.from(document.getElementsByClassName("delete"));
const addUserForm = document.getElementById("add-user");

addUserForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const inputs = event.target.getElementsByTagName("input");

  const name = inputs["name"].value;
  const lastName = inputs["lastName"].value;
  const email = inputs["email"].value;
  const age = inputs["age"].value;

  if (name === "" || lastName === "" || email === "" || age === "") {
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
      lastName,
      email,
      age,
    }),
  });

  console.log(res);
  window.location.reload();
});

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", async (event) => {
    const values = {};
    const siblings = getAllSiblings(event.target.parentNode);

    siblings.forEach((child) => {
      const name = child.getAttribute("name");
      if (name) {
        values[name] = child.innerHTML;
      }
    });

    const res = await fetch("/users", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    console.log(res);
    window.location.reload();
  });
});

function getAllSiblings(elem, filter) {
  var sibs = [];
  elem = elem.parentNode.firstChild;
  do {
    if (elem.nodeType === 3) continue; // text node
    if (!filter || filter(elem)) sibs.push(elem);
  } while ((elem = elem.nextSibling));
  return sibs;
}
