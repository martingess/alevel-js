// let gameLogic = {
//     scope = {
//         position = 
//     }
// }

let scopeImg = document.querySelector('#scope')
scopeImg.style.top = 200 +'px';
scopeImg.style.left = 200 +'px';

let target = document.querySelector('#target')

let scope = {
    scopePosX: null,
    scopePosY: null,
    scopePassedX: 0,
    scopePassedY: 0,
    mousePosX: null,
    mousePosY: null
}

document.body.addEventListener('mousemove', (event) => { //отслеживаем движение мыши
    scope.mousePosX = event.clientX;
    scope.mousePosY = event.clientY;
});

function moveScope() {
    let stepY = 1
    let stepX = 1

    passedWayX = 0;
    let passedWayY = 0;
    let move = setInterval(() => {
        scope.scopePassedX += stepX;
        scope.scopePassedY += stepY;
        updateScopePosition(stepX, stepY)
        if (scope.scopePassedY > 50 || scope.scopePassedY < -50){
            scope.scopePassedY = scope.scopePassedY > 0 ? 50 : -50
            stepY = -stepY;
        }
        if (scope.scopePassedX > 60 || scope.scopePassedX < -60){
            scope.scopePassedX = scope.scopePassedX > 0 ? 60 : -60
            stepX = -stepX;
        }
    }, 10)
    function updateScopePosition(x, y) {
        let positionNowX = parseInt(scopeImg.style.left);
        let positionNowY = parseInt(scopeImg.style.top);
        scopeImg.style.left = positionNowX + x + 'px';
        scopeImg.style.top = positionNowY + y + 'px';
    }
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