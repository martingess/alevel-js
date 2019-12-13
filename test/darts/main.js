// let gameLogic = {
//     scope = {
//         position = 
//     }
// }

let scope = document.querySelector('#scope')
let target = document.querySelector('#target')

let scopePos = {
    originCoordinatsX: null,
    originCoordinatsY: null
}
scope.style.display = 'block'



function coordinat(event) {
    let max = 100;
    let min = -100;
    let direction = Math.random();

    
    scopePos.smeshenie = Math.random()
    if (Math.random() > 0.5) {
        scopePos.smeshenie *= -1;
    }
    scopePos.originCoordinatsY += scopePos.smeshenie;
    scopePos.originCoordinatsX += scopePos.smeshenie;
    scope.style.top = event.clientY + scopePos.originCoordinatsY + 'px';
    scope.style.left = event.clientX + scopePos.originCoordinatsX + 'px';
}

document.body.addEventListener('mousemove', coordinat)
document.body.addEventListener('mousedown', () => {

})
document.body.addEventListener('mouseup', () => {
    document.body.removeEventListener('mousemove', coordinat)
})

//при нажатии мыши в рандомном месте с определённым радиусом появлятся прицел
//он сразу начинает двигаться относительно своих начальных координатов
//при отжатии мыши происходит фиксация координатов прицела