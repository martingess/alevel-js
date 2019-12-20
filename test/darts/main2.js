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
        this.attachedElementPosX = attachedDomElement === 0 ? 0 : parseInt(attachedElement.style.left);
        this.attachedElementPosY = attachedDomElement === 0 ? 0 : parseInt(attachedElement.style.top);
        this.passedWayX = 0;
        this.passedWayY = 0;
        this.currentPositionX = 0;
        this.currentPositionY = 0;
        this.centerX;
        this.centerY;
        this.intervalOfMove;
    }



    move() {
        this.intervalOfMove = setInterval(() => {
            this.currentPositionX = attachedElement + elementPassedWayX;
            this.currentPositionY = attachedElement + elementPassedWayY;
            this.centerY = this.currentPositionY + parseInt(this.mainElement.top, 10) / 2;
            this.centerX = this.currentPositionX + parseInt(this.mainElement.left, 10) / 2
            this.mainElement.style.left
        }, 100)
    }
}


class Target {
    constructor(controlledElement) {
        super(controlledElement);
    }
}

class Scope extends Actions {
    constructor(controlledElement) {
        super(controlledElement);
    }
}

class Bird extends Actions {

}