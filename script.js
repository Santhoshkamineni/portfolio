function scrollToContact() {
  document.getElementById("contact").scrollIntoView();
}

function scrollToPortfolio() {
  document.getElementById("portfolio").scrollIntoView();
}

function sendMessage(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  alert("Thank you, " + name + "! Your message has been sent.");

  document.querySelector(".contact-form").reset();
}
