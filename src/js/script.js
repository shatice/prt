console.log('The fish knows');

/***** MAIN *****/ 

function createProject() {
  const main = document.querySelector('.projects');
  class Project {
    constructor(date, svgClass, svgId, title, subtitle, description, href, btn) {
      this.date = date; 
      this.svgClass = svgClass; 
      this.svgId = svgId; 
      this.title = title; 
      this.subtitle = subtitle; 
      this.description = description; 
      this.href = href; 
      this.btn = btn; 
    }
  }
  
  const eighteen = `<p>2</p><p>0</p><p>1</p><p>8</p>`, 
        nineteen = `<p>2</p><p>0</p><p>1</p><p>9</p>`, 
        seeSite = 'VOIR LE SITE', 
        seeDesign = 'VOIR LES MAQUETTES';
  
  const molePeople = new Project(
    nineteen, 
    `cover__draw--molepeople`, 
    `#molepeople`, 
    `<p>Quand la vie se terre</p>`, 
    `Web Documentaire | Conception, intégration & gestion de projet`, 
    `<p>Conception d'un web documentaire à propos de la population vivant dans les souterrains méconnus de New York que l'on appelle les "hommes taupes".</p><p>Projet <span class="major">Vue.js</span> et <span class="major">Node.js</span></p><p>[Hébergement en cours]</p>`, 
    `https://github.com/FRobaglia/mole-people`, 
    `VOIR SUR GITHUB`
  )
  
  const urinUp = new Project(
    nineteen, 
    `cover__draw--urinup`, 
    `#urinup`, 
    `URINUP`, 
    `Histoire interactive | Intégration & Graphisme`, 
    `<p>Création en duo d'un jeu en ligne sous la forme d'une histoire interative.</p><p>Projet <span class="major">Vue.js</span>, animations <span class="major">CSS/SVG</span>. </p>`, 
    `https://urinup.netlify.com/`, 
    seeSite
  )
  
  const lv = new Project(
    nineteen, 
    `cover__draw--lv`, 
    `#lv`, 
    `LV`, 
    `Site Web | Intégration`, 
    `<p>Intégration d’un site vitrine présentant les projets cinématographiques d’une jeune réalisatrice.</p><p>Design en collaboration avec la cliente.`, 
    `https://leonieviolain.netlify.com/`, 
    seeSite
  )
  
  const uryo = new Project(
    nineteen, 
    `cover__draw--uryo`, 
    `#uryo`, 
    `URYO`, 
    `Homepage & maquettes | UX Design`, 
    `<p>Création d'une marque de vêtement unique et de sa plateforme web en quatre jours et en équipe.</p><p>Conception de la homepage, de la page produit et d’une page bonus.</p><p>Intégration de la homepage.</p>`, 
    `https://www.figma.com/file/aaHdTP9H47XbbvUf8ZUjAv/URY%C5%8C?node-id=0%3A1`,
    seeDesign
  )
  
  const voisyages = new Project(
    eighteen, 
    `cover__draw--voisyages`, 
    `#voisyages`, 
    `VOIS-YAGES`, 
    `Blog | Intégration`, 
    `<p>Intégration d’une page fictive de blog statique et accessible avec une forte sémantique HTML5, responsive et validée au W3C.</p><p>En cours d'amélioration...</p>`, 
    `https://vois-yages.netlify.com/`, 
    seeSite
  )
  
  const socomptoir = new Project(
    eighteen, 
    `cover__draw--socomptoir`, 
    `#socomptoir`, 
    `SO'COMPTOIR`, 
    `Maquettes | UX & UI Design`, 
    `<p>Redesign du site d’un salad’bar et amélioration du service de plats à emporter dans le cadre d’un projet en équipe de trois mois.</p><p>Mise en forme d’un dossier complet sur des recherches approfondies en terme d’UX.</p>`, 
    `https://www.figma.com/file/CCfgWZqChTpM65C3oYE7jnG3/So'Comptoir---Maquettes---Desktop?node-id=0%3A1`, 
    seeDesign
  )
  
  const lost = new Project(
    eighteen, 
    `cover__draw--lost`, 
    `#lost`, 
    `LOST IN CHÂTELET`, 
    `Jeu en ligne | Intégration`, 
    `<p>Gestion, conception et intégration d'un projet JavaScript de quatre jours en équipe.</p><p>Création d'un labyrinthe en ligne, sous les thèmes des arcades et du métro parisien</p><p>Graphisme en cours d'amélioration...</p>`, 
    `https://thirsty-murdock-50044a.netlify.com/`, 
    seeSite
  )
  
  const myProjects = [lv, molePeople, urinUp, uryo, voisyages, socomptoir, lost];
  
  myProjects.forEach(myProject => {
    const projectMarkUp = `
      <section class="project__container">
      <article class="project">
        <div class="project__item project__item--date">
          ${myProject.date}
        </div>
        <div class="cover__container">
          <div class="project__item project__item--cover">
            <div class="cover__rectangle">
              <svg class="cover__draw ${myProject.svgClass}" aria-hidden="true"><use xlink:href="${myProject.svgId}"></use></svg>
            </div>
            </div>
        </div>
        <div class="project__item project__item--content">
          <div class="title">        
            <h2>${myProject.title}</h2>
            <h3>${myProject.subtitle}</h3>
          </div>
          <div class="description">
            ${myProject.description}
          </div>
          <div class="button"><a target="_blank" href="${myProject.href}">${myProject.btn}</a></div>
        </div>
      </article>
      </section>
    `;
  
    main.innerHTML += projectMarkUp;
  });
}

createProject();

/***** FOOTER *****/

function footerMarkUp() {
  const iconList = document.querySelectorAll('#iconList');

  const footerMarkUp = `
    <li><a target="_blank" href="https://www.linkedin.com/in/sarah-g%C3%BCng%C3%B6r-7b7a63171/"><svg class="icon" aria-hidden="true"><use xlink:href="#linkedin"></use></svg></a></li>
    <li><a target="_blank" href="https://github.com/shatice"><svg class="icon" aria-hidden="true"><use xlink:href="#github"></use></svg></a></li>
    <li><a target="_blank" href="https://codepen.io/shatice/"><svg class="icon" aria-hidden="true"><use xlink:href="#codepen"></use></svg></a></li>
    <li><a target="_blank" href="https://www.instagram.com/sarahgungor/"><svg class="icon" aria-hidden="true"><use xlink:href="#insta"></use></svg></a></li>
  `
  
  iconList.forEach(iconItem => {
    iconItem.innerHTML = footerMarkUp
  });
}

footerMarkUp();

/***** WAYPOINTS *****/

function waypoints() {
  const
  about = document.querySelector('.about'),
  header = document.querySelector('.header'),
  logo = document.querySelector('.logo'),
  icons = document.querySelector('.icons__list'),
  lang = document.querySelector('.languages'),
  footer = document.querySelector('.footer'), 
  scroll = document.querySelector('.scroll__down'),
  copyr = document.querySelector('.copyr'), 
  networks = document.querySelector('.networks__list'),
  main = document.querySelector('.projects');

  const toBeOpen = [about, header, logo, icons, footer]; 
  const toBeHidden = [lang, main];

  logo.addEventListener('click', function() {

    toBeOpen.forEach(el => {
      el.classList.toggle('is-open');
    });

    toBeHidden.forEach(el => {
      el.classList.toggle('is-hidden');
    });
  })
  
  // WAYPOINT

  const Wp1Items = [header, footer, logo, scroll];
  
  let waypoint1 = new Waypoint({
    element: main,
    handler: function(direction) {
      Wp1Items.forEach(el => {
        el.classList.toggle('is-reached');
      });
    },
    offset: '60%'
  });

  const Wp2Items = [copyr, networks, header, footer, logo];
  
  let waypoint2 = new Waypoint({
    element: document.querySelector('.end'),
    handler: function(direction) {
      Wp2Items.forEach(el => {
        el.classList.toggle('is-reached');
      });
    }, 
    offset: '30%'
  });
}

waypoints();


