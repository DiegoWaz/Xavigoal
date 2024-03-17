// JS POUR CREER LE MENU
const menus = [
  { name: "Accueil", link: "index.html", target: "_self" },
  { name: "Vidéos", link: "/", target: "_self" },
  {
    name: "Dons",
    link: "https://www.paypal.com/paypalme/GRAPHMF5",
    target: "_self",
  },
  {
    name: "Github",
    link: "https://github.com/MattDev-Dzn?tab=repositories",
    target: "_self",
  },
  { name: "@GioXS20", link: "https://twitter.com/GioXS20", target: "_blank" },
];

// Création des éléments de menu
menus.forEach((menu) => {
  const menuElement = document.createElement("div");
  menuElement.innerHTML = `
  <li>
    <a
      href="${menu.link}"
      target="${menu.target}"
      class="resize-link"
      >${menu.name}</a
    >
  </li>
  `;
  document.querySelector(".nav-links").appendChild(menuElement);
});

// JS POUR FERMER LA MODALE
document.querySelector(".close").addEventListener("click", () => {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
  window.location.search = ''; // Efface le paramètre "id" dans l'URL
});

// JS POUR LA NAV BAR RESPONSIVE
const toggleButton = document.getElementById("toggleButton");
const navLinks = document.getElementById("navLinks");

toggleButton.addEventListener("click", toggleNav, false);

function toggleNav() {
  navLinks.classList.toggle("active");
}

// JS POUR LE COMPTEUR
const countElement = document.getElementById("count");

function startCounting() {
  const goal = allGoals.length;
  let count = 0;
  const speed = 0.8;

  const updateCount = () => {
    countElement.textContent = Math.min(count.toFixed(0), goal);
    count += speed;

    if (count <= goal) {
      requestAnimationFrame(updateCount);
    } else {
      countElement.textContent = goal;
    }
  };

  updateCount();
}

startCounting();

// Fonction pour ouvrir la modal avec les détails d'un but

function openModal(goal) {
  const goalNumber = goal.id;
  const modalContent = document.querySelector(".modal-content");

  // Bouton précédent
  const previous = (goalNumber > 1) ? `<a href="?id=${
    goalNumber - 1
  }"><span class="arrow previous"><img src="image/FG.png" alt="" srcset=""></span></a>` : ''

  // Bouton suivant
  const next = (goalNumber < allGoals.length) ? `<a href="?id=${
    goalNumber + 1
  }"><span class="arrow next"><img src="image/FD.png" alt="" srcset=""></span></a>` : ''

  modalContent.innerHTML = `
    <div class="navigation-arrows">
      ${previous}
      <p class="P1">BUT N°${goalNumber}</p>
      ${next}
    </div>
    <div class="video-container">
      <iframe class="rounded-video" src="${
        goal.video
      }" id="widget4" data-gtm-yt-inspected-12="true" title="#1 Xavi vs Ajax" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="large-box">
      <p><strong>Détails du but</strong></p>
      <ul>
        <li>But N°${goalNumber}</li>
        <li>Equipe : <strong>${goal.team}</strong></li>
        <li>Adversaire : <strong>${goal.opponent}</strong></li>
        <li>Date : <strong>${goal.date}</strong></li>
        <li>Compétition : <strong>${goal.competition}</strong></li>
        ${goal.details
          .map(
            (detail) =>
              `<li>${detail.label} : <strong>${detail.value}</strong></li>`
          )
          .join("")}
      </ul>
    </div>
  `;
  // Affichez la modal
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Boucle sur tous les buts pour les afficher et ajouter des événements de clic
allGoals.forEach((goal) => {
  const goalElement = document.createElement("div");
  const goalNumber = goal.id;
  goalElement.classList.add("goal");
  goalElement.innerHTML = `
  <div class="content">
    <div class="stat">
      <div class="numberGoal">
        <span class="T1">BUT</span>
        <span class="B1">${goalNumber}</span>
      </div>
      <div class="against">
        <span class="VS1">VS</span>
        <span class="C1">${goal.opponent}</span>
      </div>
      <div class="team-logo">
        <img src="image/${goal.team}.png" alt="${goal.team}">
      </div>
    </div>
    <div class="rounded-box-container">
      <div class="rounded-box">${goal.competition}</div>
      <div class="rounded-box">${goal.date}</div>
    </div>
  </div>
`;
  document.querySelector(".box").appendChild(goalElement);

  // Ajoute un gestionnaire d'événements de clic sur chaque but
  goalElement.addEventListener("click", () => {
    window.location.search = `?id=${goal.id}`; // Met à jour l'URL avec l'ID du but
    openModal(goal); // Ouvre la modal correspondante
  });

  // Vérifie si l'ID du but correspond à l'ID passé dans l'URL
  const urlParams = new URLSearchParams(window.location.search);
  const idParam = urlParams.get("id");
  if (goal.id.toString() === idParam) {
    openModal(goal); // Ouvre la modal si l'ID correspond
  }
});
