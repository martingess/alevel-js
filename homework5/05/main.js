function getInnerTextOfElemet(elementName) {

    function getAllInnerText(collection) { //вывод всего текста коллекции в массиве
        let arrayOfInnerText = [];
        for (value of collection) {
            arrayOfInnerText.push(value.innerText)
        }
        return arrayOfInnerText;
    }
    if (elementName.slice(0, 1) === '.') { //если класс 
        let classElements = document.getElementsByClassName(elementName.slice(1))
        return getAllInnerText(classElements);
    } else if (elementName.slice(0, 1) === '#') { //если id
        return document.getElementById(elementName.slice(1)).innerText
    } else { //если тэг
        let classElements = document.getElementsByTagName(elementName)
        return getAllInnerText(classElements);
    }
}