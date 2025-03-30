document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully!");

    // Ensure navigation links work properly
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function () {
            console.log("Navigating to:", this.getAttribute("href"));
        });
    });

    // Example: Toggle mobile menu (if you have a hamburger menu)
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }
});
