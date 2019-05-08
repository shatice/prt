let // ABOUT
  about = document.querySelector('.about'),
  intro = document.querySelector('.introduction'),
  logo = document.querySelector('.logo'),
  icons = document.querySelector('.icons__list'),
  lang = document.querySelector('.languages');
    

// ABOUT SECTION

logo.addEventListener('click', function() {
  about.classList.toggle('is-open');
  intro.classList.toggle('is-open');
  logo.classList.toggle('is-open');
  icons.classList.toggle('is-open');
  lang.classList.toggle('is-hidden');
  list.classList.toggle('is-hidden');
  content.classList.toggle('is-hidden');
  drawslist.classList.toggle('is-hidden');
})














