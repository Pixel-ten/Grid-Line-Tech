var modalOpen = document.getElementById("modal_open");
var modalCoverbox = document.getElementById("modal_v_none_cont");
var modalMaincontainer = document.getElementById("modal_container");
var modalClose = document.getElementById("modal_close");

modalOpen.addEventListener("click", function () {
    modalCoverbox.style.display = "flex";
    modalCoverbox.style.position = "absolute";
    modalMaincontainer.style.display = "flex";

});

modalCoverbox.addEventListener("click", function () {
    modalCoverbox.style.display = "none";
    modalMaincontainer.style.display = "none";
});
modalClose.addEventListener("click", function () {
    modalCoverbox.style.display = "none";
    modalMaincontainer.style.display = "none";
});