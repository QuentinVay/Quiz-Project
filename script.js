import questionsVariees from "./questions.js";

const body = document.querySelector(".bodyRank");
const imgTrophy = document.querySelector(".imgTrophy");
const imgShame = document.querySelector(".imgShame");
let marginLeft;
let tempsTimer = 60;
let timeprogress;
let nombrepoints = 0;
let nameUser;

const startQuiz = document.querySelector('.buttonStartHome');
startQuiz.addEventListener('click', ()=>{
  // Demarrage du quiz init temps à 60s chronometre
 nameUser= document.getElementById('pseudo').value;
  startChronometre(tempsTimer);
  selectquestionquiz(questionsVariees);
});

if (nombrepoints >= 100) {
  imgTrophy.style.display = "block";
  imgShame.style.display = "none";
  function createElementChoco() {
    const elementLeft = document.createElement("div");
    elementLeft.className = "chocolatine";

    marginLeft = Math.random() * 50;
    elementLeft.style.marginLeft = marginLeft + "%";
    elementLeft.style.animationDuration = Math.random() * 4 + 3 + "s";

    const elementRight = document.createElement("div");
    elementRight.className = "chocolatine";
    marginLeft = Math.max(Math.random() * 60 + 20, 30);
    elementRight.style.marginLeft = marginLeft + "%";
    elementRight.style.animationDuration = Math.random() * 4 + 3 + 's';

    body.appendChild(elementLeft);
    body.appendChild(elementRight);
    
    elementLeft.addEventListener("click", function () {
      elementLeft.remove();
    });
    elementRight.addEventListener("click", function () {
      elementRight.remove();
    });
    setTimeout(function () {
      elementLeft.remove();
      elementRight.remove();
    }, 3000);
  }
  setInterval(createElementChoco, 600);

} else {

  imgTrophy.style.display = "none";
  imgShame.style.display = "block";
  function createElementShame() {
    const elementLeft = document.createElement("div");
    elementLeft.className = "painchocolat";

    marginLeft = Math.random() * 50;
    elementLeft.style.marginLeft = marginLeft + "%";
    elementLeft.style.animationDuration = Math.random() * 4 + 3 + "s";

    const elementRight = document.createElement("div");
    elementRight.className = "painchocolat";
    marginLeft = Math.max(Math.random() * 60 + 20, 30);
    elementRight.style.marginLeft = marginLeft + "%";
    elementRight.style.animationDuration = Math.random() * 4 + 3 + 's';

    body.appendChild(elementLeft);
    body.appendChild(elementRight);

    elementLeft.addEventListener("click", function () {
      elementLeft.remove();
    });
    elementRight.addEventListener("click", function () {
      elementRight.remove();
    });
    setTimeout(function () {
      elementLeft.remove();
      elementRight.remove();
    }, 3000);
  }
  setInterval(createElementShame, 600);
}

let compteur;
let index = 0;
function generateRandomAnswer(quention, choices, correctAnswer, fact) {

  compteur = index;
  index++;
  const bodySectionQuiz = document.querySelector(".bodyquiz");
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
  <button class="answerChoice${index}">A) ${choices[0]}</button>
  <button class="answerChoice${index}">B) ${choices[1]}</button>
  <button class="answerChoice${index}">C) ${choices[2]}</button>
  <button class="answerChoice${index}">D) ${choices[3]}</button>
  </div>`;
  bodySectionQuiz.innerHTML += bodyQuiz;
  let progressBar = document.getElementById(`idBarProgress${index}`);
  progressBar.style.width=tempsTimer*1.666666+'%';
  if (compteur > 0) {
    const animationQuiz = document.getElementById(compteur);
    animationQuiz.classList.toggle("slidequiz");
  }
  compteur++;
  const element = document.getElementById(`numberid${compteur}`);
  element.scrollIntoView();
  // addEventListener sur chaque button de réponse
  const verificationAnswer = document.getElementsByClassName(`answerChoice${index}`);
  const arrayAnswerButton = Array.from(verificationAnswer);
  arrayAnswerButton.forEach((element, buttonIndex) => {
    element.addEventListener('click', () => {
      arrayAnswerButton.forEach(button => {
        button.style.pointerEvents = 'none';
      })
      // verifier la réponse de lutilisateur avec la bonne réponse de la question
      // selon résultat contour rouge ou vert sur la réponse de lutilisateur

      // compter le nombre de points
      if (choices[buttonIndex] === correctAnswer) {
        element.style.border = "4px solid green";
        nombrepoints += 10;
      } else {
        element.style.border = "4px solid red";
      }
      console.log(nombrepoints);

      // attendre 3s appel function selectionner question
      setTimeout(() => {
        selectquestionquiz(questionsVariees);
      }, 2000);

    });
  });

  };




function startChronometre(temps) {
  clearInterval(timeprogress); 
  
  timeprogress = setInterval(() => {
    temps--;
  
    if (temps === 0) {
      clearInterval(timeprogress);
      tempsTimer = 0;
    }
  }, 1000);

  setTimeout(() => {
    clearInterval(timeprogress);
    tempsTimer = 0;
  }, 60000);

  return timeprogress;
};

// function selectionner une question aléatoirement dans un tableau
function selectquestionquiz(tableauquestion) {

  // vérifier si il reste encore du temps sinon afficher la page classement avec nombre de points réalisé

  if (tempsTimer!==0){

    let randomIndex = Math.floor(Math.random() * tableauquestion.length);
    const { question, choices, correctAnswer, fact } =
      tableauquestion[randomIndex];
    // afficher la question, stocker la bonne reponse dans une variable
    generateRandomAnswer(question, choices, correctAnswer, fact);
    // supprimer la question du tableau afin de ne pas repeter la question
    tableauquestion.splice(randomIndex, 1);
  } else {
    // affichage page classements
    const affichageRank = document.getElementById('rankSelection');
    const affichageScoreRank = document.querySelector('.detailsRankUserName');
    affichageScoreRank.innerHTML=`<p>Félicitations ${nameUser} tu fais partie de la team chocolatine ! ton score est de :${nombrepoints}</p> `
    affichageRank.classList.toggle("visible");
    affichageRank.scrollIntoView();
  }
}


let aboutQ = document.querySelector('.aboutPhotoHome');
const aboutLq = document.querySelector('.aboutPhotoHomea');

aboutQ.addEventListener('click', function () {
  aboutLq.classList.toggle("visible")
})

const playAgainButton = document.getElementById("playAgainButton");
const quizSection = document.querySelector(".bodyquiz");

playAgainButton.addEventListener("click", function () {
  // Affichez la section quiz quand on clique sur "retente ta chance".
  quizSection.classList.add("visible");
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
