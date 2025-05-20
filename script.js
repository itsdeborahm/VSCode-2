document.addEventListener('DOMContentLoaded', function () { 
  const toggleButton = document.getElementById('menu-toggle');
  const nav = document.querySelector('.navegação');

  if (toggleButton && nav) {
    toggleButton.addEventListener('click', function () {
      const isActive = nav.classList.toggle('ativo');
      toggleButton.setAttribute('aria-expanded', isActive ? "true" : "false");
    });
  }
});
