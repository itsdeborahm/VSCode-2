document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('menu-toggle');
  const nav = document.querySelector('.navegação');

  toggleButton.addEventListener('click', function () {
    nav.classList.toggle('ativo');
  });
});
