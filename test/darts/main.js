let scopeImg = document.querySelector('#scope')
scopeImg.style.top = 0 + 'px';
scopeImg.style.left = 0 + 'px';

let targetImg = document.querySelector('#target')
targetImg.style.width = 300 + 'px';
targetImg.style.height = 300 + 'px';

let scoring = document.querySelector('#scoring')


function Scope(scopeImg) {
    this.scopePassedX = 0;
    this.scopePassedY = 0;
    this.stepX = 1;
    this.stepY = 1;
    this.movingStart = () => {
        this.move = setInterval(() => {
            let updateScopePosition = (x, radius) => {
                this.currentPositionX = this.mousePosX + this.scopePassedX + x;
                this.currentPositionY = this.mousePosY + this.scopePassedY + radius;
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
        }, 100)
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
        
        let differenceX = this.scopeCenterX - target.centerX;
        let differenceY = this.scopeCenterY - target.centerY;
        let targetAll = 10; //сколько всего делений
        let targetRadiusAll = parseInt(targetImg.style.width) / 2 //радиус цели
        let step = targetRadiusAll / targetAll; //шаг
        let radius = step; //начальное значение 
        let arr = []; //все промежутки 

        for (let i = 10; i >= 0; i--) {
            arr.push({
                radius: radius,
                score: i,
            });
            radius += step;
        }
        let radiusOfHit = Math.sqrt(differenceX**2+differenceY**2);

        for (let key of arr) {
            if (radiusOfHit<=key.radius) {
                scoring.value = scoring.value === '' ? key.score : Number(scoring.value) + key.score;
                break;
            }
        }
    })
}

function Target(targetDomElem) { //конструктор целей
    //позиционирование
    this.positionX = targetDomElem.offsetLeft;
    this.positionY = targetDomElem.offsetTop;
    this.centerX = this.positionX + (parseInt(targetDomElem.style.width) / 2);
    this.centerY = this.positionY + (parseInt(targetDomElem.style.width) / 2);
}

let target = new Target(targetImg)
let scope = new Scope(scopeImg);