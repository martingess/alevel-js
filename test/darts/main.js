let scopeImg = document.querySelector('#scope')
scopeImg.style.top = 0 + 'px';
scopeImg.style.left = 0 + 'px';

let target = document.querySelector('#target')

function Scope() {
    this.scopePassedX = 0;
    this.scopePassedY = 0;
    this.stepX = 1;
    this.stepY = 1;
    this.movingStart = () => {
        this.move = setInterval(() => {
            let updateScopePosition = (x, y) => {
                scopeImg.style.left = this.mousePosX + this.scopePassedX + x + 'px';
                scopeImg.style.top = this.mousePosY + this.scopePassedY + y + 'px';
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

    document.body.addEventListener('mousedown', ()=>{
        this.movingStart()
    })
    document.body.addEventListener('mouseup', ()=>{
        this.movingStop()
    })
}



let scope = new Scope();