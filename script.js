import questionsVariees from "./questions.js";

const body = document.querySelector(".bodyRank");
let marginLeft;
let nombrepoints = 0;
let nameUser;
const startQuiz = document.querySelector('.buttonStartHome');
startQuiz.addEventListener('click', ()=>{
  // Demarrage du quiz init temps à 60s chronometre
 nameUser= document.getElementById('pseudo').value;
  startChronometre(tempsTimer);
  selectquestionquiz(questionsVariees);
})

function createElement() {
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

setInterval(createElement, 600);

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
  arrayAnswerButton.forEach((element,buttonIndex) => {
    element.addEventListener('click', () => {
      arrayAnswerButton.forEach(button => {
        button.style.pointerEvents='none';
      })
      // verifier la réponse de lutilisateur avec la bonne réponse de la question
      // selon résultat contour rouge ou vert sur la réponse de lutilisateur
      // compter le nombre de points
      if (choices[buttonIndex]===correctAnswer){
        element.style.border="4px solid green";
        nombrepoints+=100;
      }else{
        element.style.border="4px solid red";
        }
        console.log(nombrepoints);
        // attendre 3s appel function selectionner question
    setTimeout(() => {
      selectquestionquiz(questionsVariees);
    }, 2000);
    
  });
});
};
let tempsTimer = 60;
let timeprogress;

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
}

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
  }else{
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
const quizSection = document.getElementById("quizSection");

playAgainButton.addEventListener("click", function () {
  // Affichez la section quiz quand on clique sur "retente ta chance".
  quizSection.classList.add("visible");
});


// init barre à 100% au demarrage du quiz
// à chaque seconde écoulé diminuer la taille de la barre

