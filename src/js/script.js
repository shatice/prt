let // ABOUT
  about = document.querySelector('.about'),
  intro = document.querySelector('.header'),
  logo = document.querySelector('.logo'),
  icons = document.querySelector('.icons__list'),
  lang = document.querySelector('.languages'),
  footer = document.querySelector('footer');
    

// ABOUT SECTION

logo.addEventListener('click', function() {
  about.classList.toggle('is-open');
  intro.classList.toggle('is-open');
  logo.classList.toggle('is-open');
  icons.classList.toggle('is-open');
  footer.classList.toggle('is-open');
  lang.classList.toggle('is-hidden');
})














