let scoreBy = document.getElementsByClassName('score__by');
console.log(scoreBy)

window.addEventListener('load', (event) => {
    fetch('./data.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      scoreBy.forEach(element => {
        console.log(element);
        element.innerHTML + data[0][1];
      });
    })
    .catch(function (err) {
      console.log(err);
    })
})