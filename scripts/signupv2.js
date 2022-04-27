var getData = function(){
    
    var name = document.getElementById("name").value
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var foto=document.getElementById("foto").value
    var password = document.getElementById("password").value
    var rpassword = document.getElementById("rpass").value
    var rol=document.getElementById("rol")
    var fcoins=document.getElementById("Fcoins").value
    
    alert("Hola,"+ name,+" tu username es:"+ username,+ "tu saldo de Fcoins es "+ fcoins)
    btn.addEventListener('click', () => {
        const obj = {
          name: name.value,
          username: username.value,
          email: email.value,
          foto: foto.value,
          password: password.value,
          rpassword: rpassword.value,
          rol: rol.value,
          fcoins: fcoins.value
        };
        JSON.stringify(obj);
      });
}