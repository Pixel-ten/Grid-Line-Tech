var navClick = false;
document.getElementById("nav_icon").addEventListener("click", function () {
    var nav = document.getElementById("nav");
    var ul = document.getElementById("ul");
    if (navClick === false) {
        nav.style.display = "flex";
        ul.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "50px";
        nav.style.right = "50px";
        navClick = true;
    } else {
        nav.style.display = "none";
        navClick = false;
    }
});