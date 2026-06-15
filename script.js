const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message sent successfully!");
});