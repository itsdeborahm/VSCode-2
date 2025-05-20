document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('menu-toggle');
  const nav = document.querySelector('.navegação');

  if (toggleButton && nav) {
    // Toggle menu on button click
    toggleButton.addEventListener('click', function () {
      const isActive = nav.classList.toggle('ativo');
      toggleButton.setAttribute('aria-expanded', isActive);
    });

    // Close menu when a nav link is clicked (mobile friendly)
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('ativo');
        toggleButton.setAttribute('aria-expanded', false);
      });
    });
  }
});
