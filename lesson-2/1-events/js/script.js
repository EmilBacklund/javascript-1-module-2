// Question 1 what are function expressions

const myFunctionExpression = function () {
  console.log('Hey I am here');
};

myFunctionExpression();

function myOtherFUnction() {
  console.log('Hey I am here');
}

// Question 2
// how to detect an event on a button
// 2 ways to do it:

// Both ways to do it requires that you first select the element
const button = document.querySelector('.btn');

// First way to do it:
// 1.

const handleClick = function handleClick() {
  console.log('I am clicked');
};

// 2.
button.addEventListener('click', handleClick);

// ********

// second way to do it:
// 1.
button.onclick = function () {
  console.log(this);
  console.log(event);
};

// Question 3 key press
//
// the keydown event is triggered when the user presses a key
// The keyup event is triggered when the user releases a key
// The onKeyPress event is triggered when the user press and release the key (not used anymore

const myFirstNameInput = document.querySelector('#firstName');

const handleKeyPress = function (event) {
  console.log('A key is pressed');
  console.log(event);
  console.log(event.target);
};

myFirstNameInput.addEventListener('keydown', handleKeyPress);

// Question 4 mouse hovering

const hoveringTest = document.querySelector('.pet-button');

const handleHover = function (event) {
  console.log('I am hovered');
  console.log(event);
  console.log(event.target);
  console.log(event.target.dataset.animal);
  hoveringTest.classList.add('hover');
};

hoveringTest.addEventListener('mouseover', handleHover);

// question 5 play with mouseout

const handleMouseOut = function () {
  hoveringTest.classList.remove('hover');
};

hoveringTest.addEventListener('mouseout', handleMouseOut);

// Question 6 select all the li

const mouseOver = document.querySelectorAll('li');

const mouseOverLi = function (mouseOver) {
  for (let i = 0; i < mouseOver.length; i++) {
    mouseOver[i].addEventListener('mouseover', hoverListItem);
  }
  return mouseOver;
};

mouseOverLi(mouseOver);

function hoverListItem(event) {
  console.log(event.target.dataset.animal);
}

// const mouseOver = document.querySelectorAll('li');

// for (let i = 0; i < mouseOver.length; i++) {
//   mouseOver[i].addEventListener('mouseover', hoverListItem);
// }

// function hoverListItem(event) {
//     console.log(event.target.dataset.animal);
//   }
