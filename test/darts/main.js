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