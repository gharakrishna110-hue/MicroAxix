function showAlert() {
  alert("Welcome to MicroAxix! 🚀 Let’s build something brilliant.");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! We'll get back to you soon.");
  this.reset();
});
