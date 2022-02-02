const btn = document.querySelector("button");
const counter = document.querySelector(".character-count span");
const messageContainer = document.querySelector("textarea");

// const myMessage = () => {
//   counter.innerHTML = messageContainer.value.length;
//   if (messageContainer.event.target.value.length === 5) button.disable = "true";
// };

// btn.addEventListener("click", myMessage);

messageContainer.onkeyup = function (event) {
  //   console.log(event);
  //   console.log(event.key);
  //   console.log(event.target.value);
  const numbersOfChars = event.target.value.length;
  console.log("numberOfCharsEntered: ", numbersOfChars);
  counter.innerHTML = numbersOfChars;
  if (numbersOfChars >= 5) {
    btn.disabled = "false";
  } else {
    btn.disabled = "true";
  }
};
