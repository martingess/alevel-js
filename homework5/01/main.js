function addAndRotateImg(imgId) {
    var url = 'str';
    var deg;
    while (url.slice(0, 8) !== 'https://' && url.slice(0, 7) !== 'http://') {
        url = prompt('Enter img url');
    }
    imgId.src = url;

    while (isNaN(deg) && !isFinite(deg)) {
        deg = Number(prompt('Enter deg'));
    }

    var i = 0;
    var rotate = setInterval(() => {
        imgId.style.transform = `rotate(${deg}deg)`;
        deg += 90;
        i++;
        if (i >= 5) {
            clearInterval(rotate)
        };
    }, 1000)
}

var myimg = document.querySelector('#myimg')
addAndRotateImg(myimg)