// The setTimeout method is used to execute a
// function after a specified period of time.

setTimeout(() => {
  console.log("Hi");
}, 3000);

setTimeout(() => {
  console.log("you are");
}, 4000);

setTimeout(() => {
  console.log("stupid 🥴");
}, 5000);

const loader = document.querySelector(".loader");

setTimeout(() => {
  loader.innerHTML = "Finished downloading!";
}, 5000);
