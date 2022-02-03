const one = document.querySelector('.one');

const divs = document.querySelectorAll('.container > div');

for (let i = 0; i < divs.length; i++) {
  console.log(divs[i]);
  divs[i].onclick = function () {
    console.log('Price: ' + event.target.dataset.price);
  };
}
