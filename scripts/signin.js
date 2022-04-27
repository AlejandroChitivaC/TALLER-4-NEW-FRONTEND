
// function getData() {
//     var email= document.getElementById("email").value
//     var pass=document.getElementById("pass").value  
//     alert("Bienvenido"+ email, "pronto será redireccionado ")

// }
const file= "/data/"
const btn = document.getElementById("btn");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
btn.addEventListener('click', () => {
    const obj = {
      email: email.value,
      pass: pass.value
    };
    JSON.stringify(obj);
  });