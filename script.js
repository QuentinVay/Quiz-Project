import questionsVariees from "./questions.js";

const affichageRank = document.getElementById('rankSelection');
const affichageScoreRank = document.querySelector('.detailsRankUserName');

const bodySectionQuiz = document.querySelector(".bodyquiz");
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
let endQuiz = false

function initialisationQuiz() {
  bodySectionQuiz.innerHTML = '';
  tempsTimer = 60;
  compteur = 0;
  index = 0;
  nombrepoints = 0;
  affichageRank.style.display = "none";
  imgTrophy.style.display = "none";
  imgShame.style.display = "none";
}
startQuiz.addEventListener('click', () => {
  initialisationQuiz();
  // Demarrage du quiz init temps à 60s chronometre
  nameUser = document.getElementById('pseudo').value;
  buttonsEnable = selectquestionquiz(questionsVariees);
  tempsRestant = startChronometre(tempsTimer, buttonsEnable);
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
    imgTrophy.style.display = "block";
  } else {
    // Cas où nombrepoints est inférieur à 100 (team pain au chocolat)
    tempsTimer = 60;
    affichageScoreRank.innerHTML = `<p>Désolé ${nameUser} tu fais partie de la team pain au chocolat! ton score est de :${nombrepoints}</p>`;
    imgShame.style.display = "block";
  }
  setTimeout(() => {
    affichageRank.style.display = "grid";
    affichageRank.scrollIntoView();
  }, 2000);
  const rankFourElement = document.querySelector(".rankFour");
  const pseudoInput = document.getElementById("pseudo");
  // mise à jour le texte de l'élément "rankFour" avec la valeur de l'input "pseudo" et la valeur de la variable "nombrepoints"
  rankFourElement.textContent = `${pseudoInput.value}: ${nombrepoints}pts`;

  function createPastryAndHandleClick(className) {
    const element = createPastry(className);
    body.appendChild(element);
    element.addEventListener("click", () => element.remove());
    setTimeout(() => element.remove(), 3000);
  }

  setInterval(() => createPastryAndHandleClick(nombrepoints >= 100 ? "chocolatine" : "painchocolat"), 600);
}

let compteur;
let index = 0;

function generateRandomAnswer(quention, choices, correctAnswer, fact) {
  compteur = index;
  index++;
  let bodyQuiz = `<div class="quiz1 slidequiz" id="${index}">
  <div class="pictureQuestion">
      <div class="numberQuestion" id="numberid${index}">
          <div class="centerNumberQuestion">
              <p>${index}</p>
          </div>
      </div>
      <div class="img ">
          <img src="./images/Quiz/Photo1.png" alt="">
      </div>
  </div>
  <div class="barTimeProgress">
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

  if (compteur > 0) {
    const animationQuiz = document.getElementById(compteur);
    animationQuiz.classList.toggle("slidequiz");
  }
  compteur++;
  const element = document.getElementById(`numberid${compteur}`);
  if (!endQuiz) {
    element.scrollIntoView();
    console.log('scroll');
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
        nombrepoints += 100;
      } else {
        element.style.border = "4px solid red";
      }

      // attendre 2s appel function selectionner question
      tempsRestant += 1;
      setTimeout(() => {
        buttonsEnable = selectquestionquiz(questionsVariees);
        tempsRestant = startChronometre(tempsRestant, buttonsEnable)
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


function startChronometre(temps, buttons) {
  clearInterval(timeprogress);
  timeprogress = setInterval(() => {
    temps--;
    tempsRestant--;
    console.log(temps);

    if (temps <= 0) {
      clearInterval(timeprogress);
      tempsTimer = 0;
      console.log('timeout temps===0');
      showRank();
      disableButtons(buttons); // Désactiver les boutons lorsque le temps est écoulé
    }

    // Mettez à jour la largeur de la barre de progression en fonction du temps restant
    const progressWidth = 99 - (temps / 60) * 99; // 60 est la durée totale en secondes
    progressBar.style.width = progressWidth + '%';
  }, 1000);

  setTimeout(() => {
    clearInterval(timeprogress);
    console.log('timeout settimeout');
    temps = 0;
    tempsTimer = 0;
    disableButtons(buttons); // Désactiver les boutons lorsque le temps est écoulé
  }, 10000 * temps);

  return temps;
}

// function selectionner une question aléatoirement dans un tableau
function selectquestionquiz(tableauquestion) {

  let randomIndex = Math.floor(Math.random() * tableauquestion.length);
  const { question, choices, correctAnswer, fact } =
    tableauquestion[randomIndex];
  // supprimer la question du tableau afin de ne pas repeter la question
  tableauquestion.splice(randomIndex, 1);
  // afficher la question, stocker la bonne reponse dans une variable
  return generateRandomAnswer(question, choices, correctAnswer, fact);
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
  initialisationQuiz();
  bodyHome.scrollIntoView();
});

const rankFourElement = document.querySelector(".rankFour");
const pseudoInput = document.getElementById("pseudo");

pseudoInput.addEventListener("input", function () {
  // Met à jour le texte de l'élément "rankFour" avec la valeur de l'input "pseudo" et la valeur de la variable "nombrepoints"
  rankFourElement.textContent = `${pseudoInput.value}: ${nombrepoints}pts`;
});

// Bloquer le bouton "Envoyer" tant que tout les champs ne sont pas remplis"
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
