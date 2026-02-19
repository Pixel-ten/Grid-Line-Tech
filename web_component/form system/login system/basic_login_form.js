document.getElementById("login").addEventListener('click', function () {
    var userName = document.getElementById("username").value;
    var passWord = document.getElementById("password").value;
    if (userName == "Admin" && passWord == "12345") {
        alert("You Are Logged In !")
    } else {
        alert("Wrong Password Or Username !!")
    }
});