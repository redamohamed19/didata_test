const navbar_respons = document.querySelector('.respons_navbar');
const navbar = document.querySelector('.navbar');
const li_navbar = document.querySelectorAll('nabvar_li');

navbar_respons.addEventListener('click', () => {
  navbar.classList.toggle('open');
});
