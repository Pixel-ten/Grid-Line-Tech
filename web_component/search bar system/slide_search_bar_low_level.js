var searchIconcontainer = document.getElementById("search_icon_container");
var searchInput = document.getElementById("search_inp");
var searchBcontainer = document.getElementById("search_box_container");
var searchIconlink = document.getElementById("search_icon_link");
var searchicon = document.getElementById("search_icon");
var searchCloseicon = document.getElementById("close_icon");
searchIconcontainer.addEventListener("click", function () {
    searchInput.style.width = "250px";
    searchInput.style.padding = "1rem";
    searchInput.style.border = "2px solid black";
    searchInput.style.transition = "all .3s linear";
    searchIconcontainer.style.border = "none";
    searchCloseicon.style.height = "50px";
    searchCloseicon.style.width = "50px";
    searchCloseicon.style.position = "absolute";
    searchCloseicon.style.right = "-5rem";
    searchCloseicon.style.color = "black";
    searchCloseicon.style.display = "grid";
    searchCloseicon.style.placeItems = "center";
    searchCloseicon.style.fontSize = "25px";
});

searchCloseicon.addEventListener("click", function () {
    searchInput.style.width = "0";
    searchInput.style.padding = "0";
    searchInput.style.border = "none";
    searchInput.style.transition = "all .3s linear";
    searchIconcontainer.style.border = "2px solid black";
    searchCloseicon.style.height = "0";
    searchCloseicon.style.width = "0";
    searchCloseicon.style.position = "none";
    searchCloseicon.style.right = "0";
    searchCloseicon.style.color = "black";
    searchCloseicon.style.display = "none";
});
