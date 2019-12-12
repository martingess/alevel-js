// 6. Делаем функцию $(), которая может принимать аргументом название класса, айди или название просто тега.
// Если это тег, то ишем по тегу и выводим эти елементы, которые мы нашли. Если это айди, то ишем по айди. Если это класс. Тоооо, если на сайте несколько таких класов, возварашаем как массив елементов, который нашли, если только один клас, то возвараем просто один елемент не в массиве!

function $(elementName) {
    if (elementName.slice(0, 1) === '.') { //если класс 
        let classElements = document.getElementsByClassName(elementName.slice(1))
        return classElements.length > 1 ? classElements : classElements[0]
    } else if (elementName.slice(0, 1) === '#') { //если id
        return document.getElementById(elementName.slice(1))
    } else { //если тэг
        let classElements = document.getElementsByTagName(elementName)
        return classElements.length > 1 ? classElements : classElements[0]
    }
}