var createElement = (tag, parent) => parent.appendChild(document.createElement(tag))

var app = document.getElementById('app')

var firstDiv = createElement('div', app)

var divInFirstDiv = createElement('div', firstDiv)
divInFirstDiv.classList.add('ivan', 'irina')

var secondDiv = createElement('div', app)

var divInSecondDiv = createElement('div', secondDiv)
divInSecondDiv.classList.add('ivan', 'irina')

var img = createElement('img', divInSecondDiv)
img.src = 'https://cs4.pikabu.ru/post_img/2015/03/07/1/1425679234_64224130.jpg'
img.alt = 'magic'
img.style.transition = "all 0.5s"

var random = (min, max) => Math.round(Math.random() * (max - min) + min)

var i = 0;
setInterval(() => {
    img.style.transform = `rotate(${i+=30}deg)`;
    img.style.position = `absolute`;
    img.style.top = `${random(0,window.innerHeight)}px`;
    img.style.left = `${random(0,window.innerWidth)}px`
    img.width = random(30, 400)
}, 1000)
var arr = ['green', 'blue', 'red', 'yellow']

setInterval(() => {
    document.body.style.backgroundColor = arr[random(0, arr.length-1)]
}, 500)