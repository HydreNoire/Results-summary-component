let scoreBy = document.querySelectorAll('.score__by');
let svg = document.querySelectorAll('.svg__icon');

let finalScore = document.querySelector("#score p:first-child");
let number = 0;

setTimeout(() => {
  setInterval(() => {
    if (number >= 76) {
      return;
    }
    number++;
    finalScore.innerText = number;
  }, "30");
}, "1000");

setTimeout(() => {
  console.log('ajout de la classe')
  document.querySelector(".quote").style.opacity = 1;
}, (30*76)+1000);

window.addEventListener('load', (event) => {
  fetch('./data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i = 0; i < scoreBy.length; i++) {
        let interval = 0;
        let icon = data[i].icon;
        let score = data[i].score;
        setInterval(() => {
          if (interval >= score) {
            return;
          }
          interval++;
          scoreBy[i].innerHTML = interval + "<span> / 100</span>";
        }, "30");
        svg[i].src = icon;
        number++;
      }
    })
    .catch(function (err) {
      console.log(err);
    })
})