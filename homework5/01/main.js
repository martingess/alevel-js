function addAndRotateImg() {
    var url = 'str';
    var deg;
    while (url.slice(0, 8) !== 'https://' && url.slice(0, 7) !== 'http://') {
        url = prompt('Enter img url');
    }

    while (isNaN(deg) && !isFinite(deg)) {
        deg = Number(prompt('Enter deg'));
    } 

    for (let i = 0; i <= 5; i++) {
        var img = document.createElement('img');
        img.src = url;
        img.style.transform = `rotate(${deg}deg)`;
        document.body.appendChild(img);
        deg+=90;
    }
}

addAndRotateImg()