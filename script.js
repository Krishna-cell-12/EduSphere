function startLearning() {
    alert("Welcome to EduSphere! Let's start your learning journey.");
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
function startLearning() {
    alert("Let's explore your courses!");
  }

  function logout() {
    alert('Logged out successfully!');
    window.location.href = 'index.html';
  }