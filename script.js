// Contact form message handler

function sendMessage(event) {

  event.preventDefault();

  

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const message = document.getElementById("message").value;

  alert(`✅ Thank you, ${name}! Your message has been received.\n\n📧 Email: ${email}\n💬 Message: ${message}`);

  document.querySelector(".contact-form").reset();

  return false;

}