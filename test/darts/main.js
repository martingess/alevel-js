let scopeImg = document.querySelector('#scope')
scopeImg.style.top = 200 + 'px';
scopeImg.style.left = 200 + 'px';

let target = document.querySelector('#target')

function Scope() {
    this.scopePassedX = 0;
    this.scopePassedY = 0;
    this.stepX = 1;
    this.stepY = 1;
    this.movingStart = () => {
        this.move = setInterval(() => {
            this.scopePassedX += this.stepX;
            this.scopePassedY += this.stepY;
            updateScopePosition(this.stepX, this.stepY)
            if (this.scopePassedY > 50 || this.scopePassedY < -50) {
                this.scopePassedY = this.scopePassedY > 0 ? 50 : -50
                this.stepY = -this.stepY;
            };
            if (this.scopePassedX > 60 || this.scopePassedX < -60) {
                this.scopePassedX = this.scopePassedX > 0 ? 60 : -60
                this.stepX = -this.stepX;
            };

            function updateScopePosition(x, y) {
                let positionNowX = parseInt(scopeImg.style.left);
                let positionNowY = parseInt(scopeImg.style.top);
                scopeImg.style.left = positionNowX + x + 'px';
                scopeImg.style.top = positionNowY + y + 'px';
            }
        }, 10)
    };

    this.movingStop = () => {
        clearInterval(this.move)
    }
}

document.body.addEventListener('mousemove', (event) => { //отслеживаем движение мыши
    scope.mousePosX = event.clientX;
    scope.mousePosY = event.clientY;
});

// function moveScope() {
//     let scope.stepY = 1
//     let scope.stepX = 1
//     let move = setInterval(() => {
//         scope.scopePassedX += scope.stepX;
//         scope.scopePassedY += scope.stepY;
//         updateScopePosition(scope.stepX, scope.stepY)
//         if (scope.scopePassedY > 50 || scope.scopePassedY < -50) {
//             scope.scopePassedY = scope.scopePassedY > 0 ? 50 : -50
//             scope.stepY = -scope.stepY;
//         }
//         if (scope.scopePassedX > 60 || scope.scopePassedX < -60) {
//             scope.scopePassedX = scope.scopePassedX > 0 ? 60 : -60
//             scope.stepX = -scope.stepX;
//         }
//     }, 10)

//     function updateScopePosition(x, y) {
//         let positionNowX = parseInt(scopeImg.style.left);
//         let positionNowY = parseInt(scopeImg.style.top);
//         scopeImg.style.left = positionNowX + x + 'px';
//         scopeImg.style.top = positionNowY + y + 'px';
//     }
// }