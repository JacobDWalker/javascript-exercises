const container = document.querySelector('#container')


const paraElement = document.createElement('p');
paraElement.textContent = "Hey, I'm Red!";
paraElement.style.color = 'red';

const headerThree = document.createElement('h3');
headerThree.textContent = "I'm a blue h3!";
headerThree.style.color = 'blue';

container.appendChild(paraElement);
container.appendChild(headerThree);

const divPink = document.createElement('div');
divPink.setAttribute('id', 'container-pink');
divPink.setAttribute('style', 'background-color: pink; border: auto;');

const headerOne = document.createElement('h1');
headerOne.textContent = "I'm in a div";

const paraInDiv = document.createElement("p");
paraInDiv.textContent = "ME TOO";

divPink.appendChild(headerOne);
divPink.appendChild(paraInDiv);
container.appendChild(divPink);

const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    console.log(e);
});

btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });