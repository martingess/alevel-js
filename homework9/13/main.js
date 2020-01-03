// 13. Даны элементы с классом www$, $ - это инкремент. Добавьте каждому элементу в конец название его тега в нижнем регистре при нажатии. Каждый раз.

const ol = document.getElementsByTagName('ol')[0];


function getIterableClassList(className) {
    const listOfIterableClasses = [];

    for (let i = 1; i < Infinity; i++) {
        let currentElem = document.getElementsByClassName(`${className}${i}`)[0]
        if (currentElem) {
            listOfIterableClasses.push(currentElem);
        } else {
            return listOfIterableClasses;
        }
    }
}

const listOfClasses = getIterableClassList('www')

listOfClasses.forEach(elem => elem.onclick = () => elem.textContent = elem.tagName.toLowerCase())