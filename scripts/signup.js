
// var getData = function () {

//     var name = document.getElementById("name").value
//     var username = document.getElementById("username").value
//     var email = document.getElementById("email").value
//     var foto = document.getElementById("foto").value
//     var password = document.getElementById("password").value
//     var rpassword = document.getElementById("rpass").value

//     console.log("Hola," + name + "tu username es:" + username)
// }
document.addEventListener("DOMContentLoaded", function (e) {
    var form = document.getElementById('form-reg');
    form.onsubmit = function (e) {
        e.preventDefault();
        var formData = new FormData(this);
        var jsonData = {};
        for (var [k, v] of formData) {
            jsonData[k] = v;
        }
        console.log(jsonData);
    }

});
