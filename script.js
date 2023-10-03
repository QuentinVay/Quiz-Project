
const body = document.querySelector(".bodyRank");
let marginLeft;


function createElement() {
  const elementLeft = document.createElement("div");
  elementLeft.className = "chocolatine";
  marginLeft =(Math.random() * 50) + (Math.random()*20);
  elementLeft.style.marginLeft = marginLeft + "%";
  elementLeft.style.animationDuration=Math.random()*4 + 3+'s';
  
  const elementRight = document.createElement("div");
  elementRight.className = "chocolatine";
  marginLeft = Math.max((Math.random() * 60) + 20, 40);
  elementRight.style.marginLeft = marginLeft + "%";
  elementRight.style.animationDuration=Math.random()*4 + 3+'s';

  body.appendChild(elementLeft);
  body.appendChild(elementRight);

  // element.addEventListener("click", function () {
  //   elementLeft.remove();
  //   elementRight.remove();
  // });
  setTimeout(function () {
    elementLeft.remove();
    elementRight.remove();
  }, 3000);
}
setInterval(createElement, 700);