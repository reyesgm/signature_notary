// Contact form interaction
const contactForm = document.querySelector("form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for your message! I'll get back to you shortly.");
        contactForm.reset();
    });
}
