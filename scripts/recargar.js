let formulario = document.getElementById("formulario");
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let fcoins = document.getElementById("fcoins").value;
const url = "https://regusers.herokuapp.com/usarios";
window.addEventListener("DOMContentLoaded", async () => {});
formulario.addEventListener("submit", async (esc) => {
  esc.preventDefault();
  let resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      fcoins: fcoins,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  let data = resp.json();
  console.log(data);
  alert("Su obra ha sido agregada");
  window.location = "../web/social.html";
  alert("Se han agregado"+ fcoins + "fcoins" + "a su cuenta");
});
