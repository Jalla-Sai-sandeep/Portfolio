document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: "smooth"
            });
        });
    });

    // Responsive Navigation Toggle
    const nav = document.querySelector("nav ul");
    const toggleButton = document.createElement("button");
    toggleButton.innerHTML = "☰";
    toggleButton.classList.add("nav-toggle");
    document.querySelector("nav").prepend(toggleButton);

    toggleButton.addEventListener("click", function () {
        nav.classList.toggle("active");
    });

    // Contact Form Validation
    const form = document.querySelector("#contact form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = form.querySelector("input[aria-label='name']").value.trim();
        const email = form.querySelector("input[aria-label='email']").value.trim();
        const message = form.querySelector("textarea").value.trim();
        
        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields before submitting.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        alert("Thank you for reaching out, " + name + "! I will get back to you soon.");
        form.reset();
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
