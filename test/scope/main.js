// let gameLogic = {
//     scope = {
//         position = 
//     }
// }

let scopeImg = document.querySelector('#scope')
let target = document.querySelector('#target')

let scope = {
    scopePosX: null,
    scopePosY: null,
    mousePosX: null,
    mousePosY: null
}

document.body.addEventListener('mousemove', (event) => { //отслеживаем движение мыши
    scope.mousePosX = event.clientX;
    scope.mousePosY = event.clientY;
});

function moveScope() {
    let step = 1 * Math.round > 0.5 ? 1 : 1 //задаем шаг как минус или как плюс
    let passedWay = 0;

    let move = setInterval(() => {
        passedWay += step;
        scope.scopePosX += step
        scope.scopePosY += step
        updateScopePosition(scope.scopePosX, scope.scopePosY)
        if (passedWay > 100 || passedWay < -100){
            clearInterval(move)
        }
    }, 100)

}

function updateScopePosition(x, y) {
    scopeImg.style.left = x + 'px'
    scopeImg.style.top = y + 'px'
}



// function coordinat(event) {
//     let max = 50;
//     let min = -50;
//     let direction = Math.random();
//     while (scope.originCoordinatsX < max + && direction > min){
//         scope.originCoordinatsX += direction;
//         scope.originCoordinatsY += direction;

//     }
// }
//при нажатии мыши в рандомном месте с определённым радиусом появлятся прицел
//он сразу начинает двигаться относительно своих начальных координатов
//при отжатии мыши происходит фиксация координатов прицела