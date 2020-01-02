//15. Дан ol, а внутри него li. Сделайте так, чтобы по нажатию на любую li эта li удалялась.
const listOfLi = document.getElementsByTagName("li");
for (let item of listOfLi) {
    item.onclick = () => {
        item.remove()
    }
}