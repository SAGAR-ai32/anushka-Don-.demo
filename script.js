const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const year = document.getElementById('year');
const subscribeForm = document.getElementById('subscribeForm');
const message = document.getElementById('message');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

year.textContent = new Date().getFullYear();

subscribeForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const email = emailInput.value.trim();

  message.textContent = `Thanks, ${email}! You're subscribed.`;
  subscribeForm.reset();
});
