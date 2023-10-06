import questionsVariees from "./questions.js";

const affichageRank = document.getElementById('rankSelection');
const affichageScoreRank = document.querySelector('.detailsRankUserName');

const asideTimer = document.querySelector('aside');
let progressBarBiere = document.querySelector('.containTimerBiere');


const bodySectionQuiz = document.querySelector("main");
const body = document.querySelector(".bodyRank");
const startQuiz = document.querySelector('.buttonStartHome');

const imgTrophy = document.querySelector(".imgTrophy");
const imgShame = document.querySelector(".imgShame");

let marginLeft;
let tempsTimer = 60;
let timeprogress;
let tempsRestant;
let nombrepoints = 0;
let nameUser;
let progressBar;
let buttonsEnable;
let endQuiz = false;
let tempTimeProgress;

function initialisationQuiz() {
  bodySectionQuiz.innerHTML = '';
  tempsTimer = 60;
  compteur = 0;
  index = 0;
  nombrepoints = 0;
  endQuiz = false;
  affichageRank.style.display = "none";
  imgTrophy.style.display = "none";
  imgShame.style.display = "none";
  asideTimer.style.display = 'none';
  progressBarBiere.style.height = '100%';
  progressBarBiere.style.borderTop = '0';
}

startQuiz.addEventListener('click', () => {
  initialisationQuiz();
  // Demarrage du quiz init temps à 60s chronometre
  nameUser = document.getElementById('pseudo').value;
  buttonsEnable = selectquestionquiz(questionsVariees);
  tempsRestant = startChronometre(tempsTimer, buttonsEnable);
  resetBulle();
});

function createPastry(className) {
  const element = document.createElement("div");
  element.className = className;
  element.style.marginLeft = Math.random() * 90 + "%";
  element.style.animationDuration = Math.random() * 4 + 3 + "s";
  return element;
}

function showRank() {
  const affichageRank = document.getElementById('rankSelection');
  const affichageScoreRank = document.querySelector('.detailsRankUserName');
  endQuiz = true;

  if (nombrepoints >= 100) {
    // Cas où nombrepoints est supérieur ou égal à 100 (team chocolatine)
    affichageScoreRank.innerHTML = `<p>Félicitations ${nameUser} tu fais partie de la team chocolatine! ton score est de :${nombrepoints}</p>`;
    rankFourElement.textContent = `${pseudoInput.value}: ${nombrepoints}pts`;
    imgTrophy.style.display = "block";
  } else {
    // Cas où nombrepoints est inférieur à 100 (team pain au chocolat)
    tempsTimer = 60;
    affichageScoreRank.innerHTML = `<p>Désolé ${nameUser} tu fais partie de la team pain au chocolat! ton score est de :${nombrepoints}</p>`;
    rankFourElement.textContent = `${pseudoInput.value}: ${nombrepoints}pts`;
    imgShame.style.display = "block";
  }
  setTimeout(() => {
    affichageRank.style.display = "grid";
    affichageRank.scrollIntoView();
  }, 2000);

  function createPastryAndHandleClick(className) {
    const element = createPastry(className);
    body.appendChild(element);
    element.addEventListener("click", () => element.remove());
    setTimeout(() => element.remove(), 3000);
  }

  setInterval(() => createPastryAndHandleClick(nombrepoints >= 100 ? "chocolatine" : "painchocolat"), 300);
}

let compteur;
let index = 0;


function generateRandomAnswer(quention, choices, correctAnswer, fact, imgQ) {
  compteur = index;
  index++;
  let bodyQuiz = `
  <div class="quiz1 slidequiz" id="${index}">
    <div class="pictureQuestion">
        <div class="numberQuestion" id="numberid${index}">
            <div class="centerNumberQuestion">
                <p>${index}</p>
            </div>
        </div>
        <div class="img ">
            <img src="${imgQ}" alt="">
        </div>
    </div>
    <div class="barTimeProgress" id="barTimeId${index}" >
        <div class="imgVideTimeProgress" id="idBarProgress${index}"></div>
        <div class="imgTopTimeProgress"></div>
        <div class="imgBottonTimeProgress"></div>
    </div>
    <div class="detailsQuestion">${quention}</div>
    <div class="Choice">
      <button class="answerChoice${index}">A) ${choices[0]}</button>
      <button class="answerChoice${index}">B) ${choices[1]}</button>
      <button class="answerChoice${index}">C) ${choices[2]}</button>
      <button class="answerChoice${index}">D) ${choices[3]}</button>
    </div>
  </div>`;
  bodySectionQuiz.innerHTML += bodyQuiz;

  progressBar = document.getElementById(`idBarProgress${index}`);

  const showProgressBar = document.getElementById(`barTimeId${index}`);
  tempTimeProgress = showProgressBar;
  // const elementDelete = document.getElementById(`blockBiereId${compteur}`);
  const animationQuiz = document.getElementById(compteur);
  detectWindowSize(showProgressBar);
  endQuiz = true;

  if (compteur > 0) {
    animationQuiz.classList.toggle("slidequiz");
  }
  compteur++;

  const element = document.getElementById(`${index}`);

  if (endQuiz) {
    element.scrollIntoView();
  }
  
  // addEventListener sur chaque button de réponse
  const verificationAnswer = document.getElementsByClassName(`answerChoice${index}`);
  const arrayAnswerButton = Array.from(verificationAnswer);
  arrayAnswerButton.forEach((element, buttonIndex) => {
    element.addEventListener('click', () => {
      disableButtons(arrayAnswerButton)
      // verifier la réponse de lutilisateur avec la bonne réponse de la question
      // selon résultat contour rouge ou vert sur la réponse de lutilisateur

      // compter le nombre de points
      if (choices[buttonIndex] === correctAnswer) {
        element.style.border = "4px solid green";
        nombrepoints += 10;
      } else {
        element.style.border = "4px solid red";
      }
      detectWindowSize(showProgressBar);

      // attendre 2s appel function selectionner question
      tempsRestant += 1;
      setTimeout(() => {
        buttonsEnable = selectquestionquiz(tableauCopie);
        tempsRestant = startChronometre(tempsRestant, buttonsEnable)
        console.log(showProgressBar);
      }, 2000);

    });
  });
  return arrayAnswerButton;
};

function disableButtons(buttons) {
  buttons.forEach(button => {
    button.style.pointerEvents = 'none';
  });
}

function detectWindowSize(document){
  
  if (window.innerWidth <= 1280) {
    // Le viewport a une largeur de 768 pixels ou moins, donc nous considérons que c'est un appareil mobile
    document.style.display='block';
    asideTimer.style.display='none';
  } else {
    // Le viewport a une largeur supérieure à 768 pixels, donc nous considérons que c'est un ordinateur de bureau
    asideTimer.style.display='block';
    document.style.display='none';
  }

}

function startChronometre(temps, buttons) {
  clearInterval(timeprogress);
  timeprogress = setInterval(() => {
    temps--;
    tempsRestant--;
    console.log(temps);
    updateBorderTop(temps);

    if (temps <= 0) {
      clearInterval(timeprogress);
      clearInterval(timeoutId);
      tempsTimer = 0;
      console.log('timeout temps===0');
      showRank();
      disableButtons(buttons); // Désactiver les boutons lorsque le temps est écoulé
    }
  }, 1000);

  const timeoutId = setTimeout(() => {
    clearInterval(timeprogress);
    console.log('timeout settimeout');
    temps = 0;
    tempsTimer = 0;
    disableButtons(buttons); // Désactiver les boutons lorsque le temps est écoulé
  }, 10000 * temps);

  return temps;
}

let borderValue = 0;

// Fonction pour mettre à jour le borderTop
function updateBorderTop(temps) {
  // Mettez à jour la largeur de la barre de progression en fonction du temps restant
  const progressWidth = 99 - (temps / 60) * 99; // 60 est la durée totale en secondes
  progressBar.style.width = progressWidth + '%';

  const progressWidthBiere = (temps / 60) * 448; // 60 est la durée totale en secondes
  progressBarBiere.style.height = progressWidthBiere + 'px';

  borderValue += 0.5; // Augmentez la valeur de 0.5px
  progressBarBiere.style.borderTop = borderValue + "px solid whitesmoke";

}

// Démarrez un setInterval pour appeler la fonction de mise à jour toutes les 10 secondes

function faireDisparaitreBulle(bulleId, delai) {
  setTimeout(() => {
    const bulle = document.getElementById(bulleId);
    if (bulle) {
      bulle.style.display = "none"; // Cacher la bulle
    }
  }, delai);
}
function resetBulle() {
  // Utilisation de la fonction pour faire disparaître les bulles à des intervalles différents
  faireDisparaitreBulle("b1", 43000); // Disparition de la bulle b1 après 2 secondes (2000 ms)
  faireDisparaitreBulle("b2", 51000); // Disparition de la bulle b2 après 3 secondes (3000 ms)
  faireDisparaitreBulle("b3", 37000); // Disparition de la bulle b3 après 5 secondes (5000 ms)
  faireDisparaitreBulle("b4", 29000); // Disparition de la bulle b4 après 7 secondes (7000 ms)
  faireDisparaitreBulle("b5", 14000); // Disparition de la bulle b5 après 10 secondes (10000 ms)
  faireDisparaitreBulle("b6", 25000); // Disparition de la bulle b5 après 10 secondes (10000 ms)
  faireDisparaitreBulle("b7", 20000); // Disparition de la bulle b5 après 10 secondes (10000 ms)
  faireDisparaitreBulle("b8", 9000); // Disparition de la bulle b5 après 10 secondes (10000 ms)
}

let tableauCopie = [];

// function selectionner une question aléatoirement dans un tableau
function selectquestionquiz(tableauquestion) {
  // Créer une copie du tableau d'origine
  tableauCopie = [...tableauquestion];

  // Vérifier si le tableau copié est vide
  if (tableauCopie.length === 0) {
    // Retourner quelque chose pour indiquer que le tableau est vide (par exemple, null)
    return null;
  }

  let randomIndex = Math.floor(Math.random() * tableauCopie.length);
  const { question, choices, correctAnswer, fact, imgQ } =
    tableauquestion[randomIndex];

  // Supprimer la question de la copie du tableau afin de ne pas la répéter
  tableauCopie.splice(randomIndex, 1);

  // Afficher la question, stocker la bonne réponse dans une variable
  return generateRandomAnswer(question, choices, correctAnswer, fact, imgQ);
}

let aboutQ = document.querySelector('.aboutPhotoHome');
const aboutLq = document.querySelector('.aboutPhotoHomea');

aboutQ.addEventListener('click', function () {
  aboutLq.classList.toggle("visible")
})

let navbarH = document.querySelector('.navBarFloatting');
const NavbarNotH = document.querySelector('.navBarHidden');
let burgerM = document.querySelector('.burgermenu')

navbarH.addEventListener('click', function () {
  NavbarNotH.classList.toggle("visible"),
    burgerM.classList.toggle('tester')
})

const playAgainButton = document.getElementById("playAgainButton");
const bodyHome = document.querySelector(".home");

playAgainButton.addEventListener("click", function () {
  // Affichez la section quiz quand on clique sur "retente ta chance".
  console.log('click');
  initialisationQuiz();
  bodyHome.scrollIntoView();
});
const playAgainButtonDesktop = document.getElementById("playAgainButtonDesktop");

playAgainButtonDesktop.addEventListener("click", function () {
  // Affichez la section quiz quand on clique sur "retente ta chance".
  console.log('click');
  initialisationQuiz();
  bodyHome.scrollIntoView();
});

const rankFourElement = document.querySelector(".rankFour");
const pseudoInput = document.getElementById("pseudo");

pseudoInput.addEventListener("input", function () {
  // Met à jour le texte de l'élément "rankFour" avec la valeur de l'input "pseudo" et la valeur de la variable "nombrepoints"
  rankFourElement.textContent = `${pseudoInput.value}: ${nombrepoints}pts`;
});

// Bloquer le bouton "Envoyer" du formulaire tant que tout les champs ne sont pas remplis"
const firstNameInput = document.querySelector(".inputFirstName");
const lastNameInput = document.querySelector(".inputLastName");
const messageInput = document.querySelector(".inputMessage");
const sendButton = document.getElementById("buttonSendContact");

firstNameInput.addEventListener("input", toggleSendButtonState);
lastNameInput.addEventListener("input", toggleSendButtonState);
messageInput.addEventListener("input", toggleSendButtonState);

function toggleSendButtonState() {
  if (
    firstNameInput.value.trim() !== "" &&
    lastNameInput.value.trim() !== "" &&
    messageInput.value.trim() !== ""
  ) {
    sendButton.disabled = false; // Activer le bouton "Envoyer" si tous les champs sont remplis
  } else {
    sendButton.disabled = true; // Désactiver le bouton "Envoyer" si un champ est vide
  }
}

// Désactivez initialement le bouton "Envoyer" au chargement de la page
sendButton.disabled = true;

if (nombrepoints < 70) {
  const rankFour = document.querySelector(".rankFour");
  const rankFive = document.querySelector(".rankFive");

  // Insérez .rankFive avant .rankFour pour les échanger de place
  rankFour.parentNode.insertBefore(rankFive, rankFour);
}

// **********************Function pour ajuster l'affichage *******************************
function ajusterBottomAside() {
  const mainAfter = document.querySelector("main::after");
  const aside = document.querySelector("aside");
  if (mainAfter && aside) {
    // Obtenez la hauteur de main::after
    const mainAfterHeight = mainAfter.clientHeight;

    // Mettez à jour la variable CSS avec la hauteur
    document.documentElement.style.setProperty("--main-after-height", `${mainAfterHeight}px`);

    // Ajouter cette hauteur à la valeur actuelle de bottom de aside
    const asideBottom = 50 + mainAfterHeight;

    // Appliquer la nouvelle valeur à la propriété "bottom" de aside
    aside.style.bottom = `${asideBottom}px`;
  }
}

// Appelez la fonction pour ajuster la valeur de bottom au chargement de la page
window.addEventListener("load", ajusterBottomAside);

// Appelez la fonction également lors du redimensionnement de la fenêtre
window.addEventListener("resize", ajusterBottomAside);


window.addEventListener("resize",() => {
  if (endQuiz) {
  detectWindowSize(tempTimeProgress) ;
  }
} );

