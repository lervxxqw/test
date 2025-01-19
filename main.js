
function toggleMenu(){
    console.log("click")
    const expandMenu = document.getElementById("expand-menu");
    expandMenu.classList.toggle("show-menu");
}
function toggleVikaImg(){
    const vikaBox = document.getElementById("vika-box");
    vikaBox.classList.toggle("vika-hide-img");

    const clickMeBtn = document.getElementById("click-me-btn");
    clickMeBtn.classList.toggle("vika-hide-img");
}

