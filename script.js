
const body = document.querySelector(".bodyRank");
let marginLeft;


function createElement() {
  const element = document.createElement("div");
  element.className = "chocolatine";
  marginLeft = Math.random() * 85;
  element.style.marginLeft = marginLeft + "%";
  body.appendChild(element);
  element.addEventListener("click", function () {
    element.remove();
  });
  setTimeout(function () {
    element.remove();
  }, 7000);
}
setInterval(createElement, 500);