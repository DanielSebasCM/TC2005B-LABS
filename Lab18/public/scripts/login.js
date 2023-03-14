const login_form = document.getElementById("login-form");

login_form.addEventListener("submit", async (e) => {
  const email = e.target.email.value;
  const password = e.target.password.value;
  const res = await fetch("/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (res.status === 401) {
    alert(await res.text());
  }
});
