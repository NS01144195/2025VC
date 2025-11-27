document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const toggle = document.querySelector(".menu-toggle");
    if (!header || !toggle) return;
    toggle.addEventListener("click", function () {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!isOpen));
        header.classList.toggle("nav-open");
    });
    header.querySelectorAll(".ddmenu a").forEach(function (link) {
        link.addEventListener("click", function () {
            header.classList.remove("nav-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
    document.addEventListener("click", function (event) {
        if (!header.contains(event.target) && header.classList.contains("nav-open")) {
            header.classList.remove("nav-open");
            toggle.setAttribute("aria-expanded", "false");
        }
    });
});