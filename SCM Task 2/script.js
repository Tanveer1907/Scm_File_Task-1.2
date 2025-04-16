// Animate stats
function animateValue(id, start, end, duration) {
  let current = start;
  const stepTime = Math.abs(Math.floor(duration / (end - start)));
  const obj = document.getElementById(id);

  const timer = setInterval(() => {
    current++;
    obj.textContent = current;
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Scroll to About Us
document.querySelectorAll('a[href^="#about-us"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animate stats on load
window.addEventListener("load", () => {
  animateValue("votes", 0, 10895, 2000);
  animateValue("polls", 0, 342, 2000);
  animateValue("users", 0, 1004, 2000);
});
function handleCredentialResponse(response) {
  const data = parseJwt(response.credential);
  localStorage.setItem('user', JSON.stringify(data));
  window.location.href = "new_voting_page.html"; // Redirect after login
}
function handleManualLogin(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  
  if (name && email && password) {
    localStorage.setItem('user', JSON.stringify({ name, email }));
    window.location.href = "new_voting_page.html"; // Redirect after login
  }
}
