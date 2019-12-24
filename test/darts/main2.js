const domElements = {
    scopeImg: document.querySelector('#scope'),
    shotsNumber: document.querySelector('#shots'),
    hitMessage: document.querySelector('#hitMessage'),
    targetImg: document.querySelector('#target'),
    scoring: document.querySelector('#scoring'),
    bullet: document.querySelector('#bullet-hole'),
    domInitialParams: () => {
        scopeImg.style.top = '0px';
        scopeImg.style.left = '0px';
        targetImg.style.width = '300px';
        targetImg.style.height = '300px';
        bullet.style.width = '24px';
        bullet.style.height = '24px';
    }
}

class Actions {
    constructor(mainElement, attachedDomElement = 0) {
        this.mainElement = mainElement;
        this.attachedElement = attachedDomElement; //элемент вокруг которого происходит движение
        this.passedWayX = 0;
        this.passedWayY = 0;
        this.currentPositionX = 0;
        this.currentPositionY = 0;
        this.intervalOfMove;
        this.stepX = 1;
        this.stepY = 1;
        this._updateElementPosition = () => {
            this.attachedElementPosX = this.attachedElement === 0 ? 0 : parseInt(attachedElement.style.left);
            this.attachedElementPosY = this.attachedElement === 0 ? 0 : parseInt(attachedElement.style.top);
            this.currentPositionX = this.attachedElementPosX + this.passedWayX + this.stepX;
            this.currentPositionY = this.attachedElementPosY + this.passedWayY + this.stepY;
            this.centerY = this.currentPositionY + parseInt(this.mainElement.style.top, 10) / 2;
            this.centerX = this.currentPositionX + parseInt(this.mainElement.style.left, 10) / 2;
            this.mainElement.style.left = `${this.currentPositionX}px`
            this.mainElement.style.top = `${this.currentPositionY}px`
            this.passedWayX += this.stepX;
            this.passedWayY += this.stepY;
        }
        this._checkBorder = () => {
            if (this.passedWayX > 100 || this.passedWayX < -150) {
                this.passedWayX = this.passedWayX > 0 ? 100 : -150;
                this.stepX = -this.stepX;
            }
            if (this.passedWayY > 100 || this.passedWayY < -150) {
                this.passedWayY = this.passedWayY > 0 ? 100 : -150;
                this.stepY = -this.stepY;
            }
        }

    }
    move() {
        this.intervalOfMove = setInterval(() => {
            this._updateElementPosition();
            this._checkBorder();
        }, 100)
    }
}


class Target {
    constructor(controlledElement) {
        
    }
}

class Scope extends Actions {
    constructor(controlledElement, attachedDomElement) {
        super(controlledElement, attachedDomElement);
    }
}

class Bird extends Actions {

}