// 17. Высота body 2000px; По нажатию на кнопку прокрутите страницу до самого низа
const btn = document.getElementsByTagName('button')[0];
btn.onclick = () => {
    scrollTo(0,2000)
}