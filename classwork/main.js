var app = document.getElementById('app');

function Circle(size, color, zIndex = 0) {
    var element = document.createElement('div');
    element.style.cssText = `
     height: ${size}px;
     width: ${size}px;
     border-radius: 50%;
     background-color: ${color};
     position: absolute;
     top: calc(50% - ${size/2}px);
     left: calc(50% - ${size/2}px);
     z-index: ${zIndex}`;
    this.appendToApp = () => {
        app.appendChild(element);
    };
}

var circles = [
    new Circle(100, 'red', 3),
    new Circle(200, 'green', 1),
    new Circle(400, 'blue')
]

circles.forEach((value) => {
    value.appendToApp()
})

var img = document.createElement('img');
img.src = 'dart.png';
app.appendChild(img);
img.style.zIndex = 10;
img.style.width = '80px';
img.style.position = 'absolute';

window.onmousemove = (event) => {
    img.style.top = `${event.clientY-60}px`;
    img.style.left = `${event.clientX}px`;
}

function basicStyle() {
    var style = document.createElement('style');

    style.innerText = `
    html, 
    body {
        height: 100%;
        margin: 0;
    }
    
    body:hover{
        cursor: none;
    }
    `
}

basicStyle();

document.head.appendChild(style)

function Bird(size, imageSrc, zIndex = 5, moveInterval) {
    var element = document.createElement('img');
    element.src = imageSrc;
    element.style.cssText = `
        z-index: ${zIndex};
        position: absolute;
        transition: ${moveInterval / 1000}s all;
        height: ${size}px;
        width: ${size}px;

    `

    function random(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    //методы
    this.appendToApp = () => {
        app.appendChild(element);
    };
    this.startFly = () => {
        setInterval(() => {
            element.style.top = `${random(0, window.innerHeight - size)}px`;
            element.style.left = `${random(0, window.innerWidth - size)}px`;
        }, moveInterval)
    };

}

birds = []

for (let i = 0; i < 50; i++) {
    birds.push(new Bird((Math.random() * (200 - 50) + 50), './orel.gif', 5, (Math.random() * (2000 - 1000) + 1000)))
}

birds.forEach(element => {
    element.appendToApp();
    element.startFly();
});