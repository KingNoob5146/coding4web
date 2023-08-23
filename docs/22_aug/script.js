// script.js
document.addEventListener("DOMContentLoaded", function () {
    const btn1 = document.getElementById("btn1");
    const menu1 = document.getElementById("menu1");

    btn1.addEventListener("click", function () {
        if (menu1.hasAttribute("hidden")) {
            menu1.removeAttribute("hidden");
        } else {
            menu1.setAttribute('hidden', "")
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const btn2 = document.getElementById("btn2");
    const menu2 = document.getElementById("menu2");

    btn2.addEventListener("click", function () {
        if (menu2.hasAttribute("hidden")) {
            menu2.removeAttribute("hidden");
        } else {
            menu2.setAttribute('hidden', "")
        }
    });
});

