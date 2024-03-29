var themeimg = document.getElementById("themeImg");

themeimg.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        themeimg.src = "assets/img/sun.png"
    } else {
        themeimg.src = "assets/img/moon.png"
    }
}