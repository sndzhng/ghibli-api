
const apppp = document.getElementById('groot');

const logo = document.createElement('img');
logo.src = 'image/logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

apppp.appendChild(logo);
apppp.appendChild(container);

var request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400){
    data.forEach(movies => {

      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const title = document.createElement('h1');
      title.textContent = movies.title;

      const description = document.createElement('p');
      movies.description = movies.description.substring(0, 300);
      description.textContent = `${movies.description}...`;

      container.appendChild(card);
      card.appendChild(title);
      card.appendChild(description);
    });
  }else{
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Oh no, it's not working!`;
    apppp.appendChild(errorMessage);
  }

}

request.send();
