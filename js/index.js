const btn = document.querySelector('.btn-mobile-nav');
const mainNav = document.querySelector('.main-nav');
btn.addEventListener('click', function () {
  mainNav.classList.toggle('nav-open');
});
