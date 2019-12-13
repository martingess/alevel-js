// let gameLogic = {
//     scope = {
//         position = 
//     }
// }

let scope = document.querySelector('#scope')

let scopePos = {
    originCoordinatsX: 0,
    originCoordinatsY: 0
}

function coordinat(event) {
    setInterval(function (event) {
        scopePos.originCoordinatsY += 1
        scopePos.originCoordinatsX += 1

        scope.style.top = event.clientY + scopePos.originCoordinatsY + 'px'
        scope.style.left = event.clientX + scopePos.originCoordinatsX + 'px'

    }, 100)
}

    scope.style.display = 'block'
    document.body.addEventListener('mousemove', coordinat, event)
    document.body.addEventListener('mousedown', () => {

})
document.body.addEventListener('mouseup', () => {
})

//при нажатии мыши в рандомном месте с определённым радиусом появлятся прицел
//он сразу начинает двигаться относительно своих начальных координатов
//при отжатии мыши происходит фиксация координатов прицела