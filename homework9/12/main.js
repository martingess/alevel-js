//12. Дан элемент #myunique. Узнайте количество его классов при нажатии и вставялйте в innerText.

const myunique = document.getElementById('myunique');
myunique.onclick = () => {
    myunique.innerText = myunique.classList.value;
}

