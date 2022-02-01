// The setInterval method is similar to
// setTimeout but it executes a function at
// a certain interval until it is cleared.

// setInterval(() => {
//   console.log('Hello');
// }, 10000);

// let count = 0;
// const intervalId = setInterval(() => {
//   console.log('Hello' + ' ' + (count + 1));
//   count += 1;
//   if (count === 10) {
//     clearInterval(intervalId);
//     console.log('Interval finished');
//   }
// }, 1000);

/// ***

const container = document.querySelector('.container');
let counter = 0;

function createHTML() {
  counter++;
  if (counter === 12) {
    clearInterval(secondIntervalId);
  }
  if (counter % 3 === 0) {
    container.innerHTML += `<li style="font-weight: bold">Hello ${counter}</li>`;
  } else if (counter % 2 === 0) {
    container.innerHTML += `<li style="border-color: red">Hello ${counter}</li>`;
  } else {
    container.innerHTML += `<li>Hello ${counter}</li>`;
  }
}

const secondIntervalId = setInterval(createHTML, 1000);

// const setInterval = setInterval(() => {
//   counter++;
//   const listItem = document.createElement('li');
//   listItem.innerHTML = counter;
//   container.append(listItem);
//   if (counter === 10) clearInterval(setInterval);
// }, 2000);
