let scopeImg = document.querySelector('#scope')
scopeImg.style.top = 0 + 'px';
scopeImg.style.left = 0 + 'px';

let targetImg = document.querySelector('#target')
targetImg.style.width = 300 + 'px';
targetImg.style.height = 300 + 'px';

function Scope(scopeImg) {
    this.scopePassedX = 0;
    this.scopePassedY = 0;
    this.stepX = 1;
    this.stepY = 1;
    this.movingStart = () => {
        this.move = setInterval(() => {
            let updateScopePosition = (x, y) => {
                this.currentPositionX = this.mousePosX + this.scopePassedX + x;
                this.currentPositionY = this.mousePosY + this.scopePassedY + y;
                this.scopeCenterX = this.currentPositionX + 50;
                this.scopeCenterY = this.currentPositionY + 50;
                scopeImg.style.left = this.currentPositionX + 'px';
                scopeImg.style.top = this.currentPositionY + 'px';
            }
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
        }, 10)
    };
    document.body.addEventListener('mousemove', (event) => { //отслеживаем движение мыши
        this.mousePosX = event.clientX;
        this.mousePosY = event.clientY;
    });
    this.movingStop = () => {
        clearInterval(this.move)
    };

    document.body.addEventListener('mousedown', () => {
        this.movingStart()
    })
    document.body.addEventListener('mouseup', () => {
        this.movingStop()
    })
}

let scope = new Scope(scopeImg);

function Target(targetDomElem) {
    this.positionX = targetDomElem.offsetLeft;
    this.positionY = targetDomElem.offsetTop;
    this.centerX = this.positionX + (parseInt(targetDomElem.style.width) / 2);
    this.centerY = this.positionY + (parseInt(targetDomElem.style.width) / 2);

}

let target = new Target(targetImg)