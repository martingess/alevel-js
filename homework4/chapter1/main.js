'use strict';
var a = {
    name: 'Vladimir', //Сделать три ассоциативных массива a, b, c, в каждом из которых должны быть поля name и surname.
    surname: 'Petrov',
    sex: 'male' //Добавьте некоторые другие поля (например age, fathername, sex (пол)) так, что бы набор полей отличался у разных объектов
};
var b = {
    name: 'Ivan',
    surname: 'Smirnov',
    age: 33,
    fathername: 'Alexandrovich'
};
var c = {
    name: 'Viktor',
    surname: 'Cepesh',
    age: 25
};

var persons = [{
    name: 'Alexey',
    surname: 'Venediktov',
    age: 23
}]; //Добавьте несколько ассоциативных массивов с персонами в обычный массив persons, например a,b,c. Так же добавьте персону литерально ({...}). Получится обычный массив с элементами-ассоциативными массивами с персонами.

persons.push(a, b, c)

for (let object of persons) { //Проверьте наличие необязательных полей у каждого из этих массивов. 
    if ('age' in object) { //Если поле найдено, выведите его с помощью alert. Проверку делайте по typeof или in в if.
        alert(`Возраст ${object.name}: ${object['age']}`);
    }
    if ('fathername' in object) {
        alert(`Отчество ${object.name}: ${object['fathername']}`);
    }
    if ('sex' in object) {
        alert(`Пол ${object.name}: ${object['sex']}`);
    }
}

//Сделайте цикл, который выводит весь массив persons в форме объектов console.log(persons[i])

for (let i = 0; i < persons.length; i++) {
    console.log(persons[i])
}

//Сделайте цикл, который выводит весь массив persons, но только Имя и Фамилию каждой персоны.
for (let i = 0; i < persons.length; i++) {
    console.log(`${persons[i].surname} ${persons[i].name}`)
}

//Сделайте цикл, который выводит весь массив persons, но только значения всех полей из объектов. Используйте вложенный цикл
for (let obj of persons) {
    for (let key in obj) {
        console.log(obj[key])
    }
}

//Сделайте цикл, которых добавляет поле fullName в каждый объект, содержащий ФИО. Учтите, что поле fathername не является обязательным.
for (let obj of persons) {
    obj.fathername ? obj.fullName = `${obj.surname} ${obj.name} ${obj.fathername}` : obj.fullName = `${obj.surname} ${obj.name}`
}

//Создайте JSON-строку из persons
var personsJSON = JSON.stringify(persons)

//Создайте ассоциативный массив с одной персоной из JSON-строки. Добавьте её в persons
var vladimir = JSON.parse(personsJSON)[1]

//Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. Имя и Фамилия - колонки. 
var str = "<table border='1'><tr><td>Имя</td><td>Фамилия</td></tr>"
for (let i = 1; i < persons.length; i++) {
    str += `<tr><td>${persons[i].name}</td><td>${persons[i].surname}</td></tr>`
}
str += "</table>"

console.log(str)
document.write(str)

//Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. Имя и Фамилия, а так же другие поля при наличии.
//Добавьте к предыдущему примеру раскраску через строчку используя другой стиль тэга tr.
var str = "<table border='1'><tr style='color: white; background-color: black'><th>Имя</th><th>Фамилия</th><th>Отчество</th><th>Возраст</th><th>Пол</th></tr>"
for (let i = 0; i < persons.length; i++) {
    str += i % 2 ? '<tr style="background-color:green">' : '<tr>'
    str += `<td>${persons[i].name}</td><td>${persons[i].surname}</td>`
    str += `<td>${persons[i].fathername ? persons[i].fathername : "No data"}</td>`
    str += `<td>${persons[i].age ? persons[i].age : "No data"}</td>`
    str += `<td>${persons[i].sex ? persons[i].sex : "No data"}</td></tr>`
}
str += "</table>"

console.log(str)
document.write(str)

//Сделать HTML-конструктор из деревянной структуры, которая была на прошлом занятии:
//рекурсивный способ
function htmlBuilder(obj) {
    var str = '';
    if (obj.subTags === undefined) { //базовый случай для рекурсивного вызова
        return `<${obj.tagName}>${obj.text}</${obj.tagName}>`
    }

    str += `<${obj.tagName} ` //открывающий тег
    if ('attrs' in obj) { //атрибуты тега
        for (let key in obj.attrs) {
            str += `${key} = '${obj.attrs[key]}'`
        }
    }
    str += '>' //закрывающая скобка для открывающего тега

    obj.subTags.forEach((element, index) => { //рекурсия для сабтегов
        str += `${htmlBuilder(obj.subTags[index])}`
    })
    str += `</${obj.tagName}>`
    return str;
}

var someTree = {
    tagName: "table", //html tag
    subTags: [ //вложенные тэги
        {
            tagName: "tr",
            subTags: [{
                    tagName: "td",
                    text: "some text",
                },
                {
                    tagName: "td",
                    text: "some text 2",
                }
            ]
        },
        {
            tagName: "tr",
            subTags: [{
                    tagName: "td",
                    text: "some text",
                },
                {
                    tagName: "td",
                    text: "some text 2",
                }
            ]
        }
    ],
    attrs: {
        border: 1,
    },
}