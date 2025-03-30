document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
    const slideElements = document.querySelectorAll(".slide-in");

    // Intersection Observer to trigger animations on scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(el => observer.observe(el));
    slideElements.forEach(el => observer.observe(el));

    
});
