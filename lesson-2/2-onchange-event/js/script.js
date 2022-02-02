// onchange event

// detect the selection of the select option input

const dropdown = document.querySelector("select");
const circle = document.querySelector(".circles");

// select the div with circle class
// 2. use onchange

dropdown.onchange = function (event) {
  //   console.log("here");
  //   console.log(event.target.value);
  //   console.log(this);
  circle.innerHTML = " ";
  for (let i = 1; i <= event.target.value; i++) {
    circle.innerHTML += `<li class="circle">${i}</li>`;
  }
};
