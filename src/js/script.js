let // ABOUT
  about = document.querySelector('.about'),
  header = document.querySelector('.header'),
  logo = document.querySelector('.logo'),
  icons = document.querySelector('.icons__list'),
  lang = document.querySelector('.languages'),
  footer = document.querySelector('.footer'), 
  counter = document.querySelector('.counter'),
  scroll = document.querySelector('.scroll__down'),
  copyr = document.querySelector('.copyr'), 
  networks = document.querySelector('.networks__list');
    

// ABOUT SECTION

logo.addEventListener('click', function() {
  about.classList.toggle('is-open');
  header.classList.toggle('is-open');
  logo.classList.toggle('is-open');
  icons.classList.toggle('is-open');
  footer.classList.toggle('is-open');
  lang.classList.toggle('is-hidden');
})

// WAIPOINT

var waypoint1 = new Waypoint({
  element: document.getElementById('projects'),
  handler: function(direction) {
    header.classList.toggle('is-reached');
    footer.classList.toggle('is-reached');
    logo.classList.toggle('is-reached');
    counter.classList.toggle('is-reached');
  },
  offset: '40%'
});

var waypoint2 = new Waypoint({
  element: document.getElementById('end'),
  handler: function(direction) {
    header.classList.toggle('is-reached');
    footer.classList.toggle('is-reached');
    logo.classList.toggle('is-reached');
    counter.classList.toggle('is-reached');
  },
  offset: '30%'
});

var waypoint3 = new Waypoint({
  element: document.getElementById('project1'),
  handler: function(direction) {
    scroll.classList.toggle('is-reached');
  },
  offset: '95%'
})

var waypoint4 = new Waypoint({
  element: document.getElementById('end'),
  handler: function(direction) {
    copyr.classList.toggle('is-reached');
    networks.classList.toggle('is-reached');
  }, 
  offset: '30%'
});


















