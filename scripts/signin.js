let formulario = document.getElementById("ingresar");
const url = "https://regusers.herokuapp.com/usarios";
window.addEventListener("DOMContentLoaded", async () => { });
formulario.addEventListener("submit", async (esc) => {
  esc.preventDefault();
  //capturando los datos del html y los voy a enviar a mi data.json
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  let data = resp.json();
  console.log(data);
  alert("Bienvenido "+email);
  window.location = "../web/perfil.html";
  
});
