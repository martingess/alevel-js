var a = 6000000000000000;

var timer = setInterval(function () {
    if (a == 1) {
        clearInterval(timer)
    }
    document.body.innerText = a--;
}, 1)