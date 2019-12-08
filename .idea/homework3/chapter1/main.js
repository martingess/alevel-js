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

for (object of persons) { //Проверьте наличие необязательных полей у каждого из этих массивов. 
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
for (obj of persons) {
    for (key in obj) {
        console.log(obj[key])
    }
}

//Сделайте цикл, которых добавляет поле fullName в каждый объект, содержащий ФИО. Учтите, что поле fathername не является обязательным.
for (obj of persons) {
    obj.fathername ? obj.fullName = `${obj.surname} ${obj.name} ${obj.fathername}` : obj.fullName = `${obj.surname} ${obj.name}`
}

//Создайте JSON-строку из persons
var personsJSON = JSON.stringify(persons)

//Создайте ассоциативный массив с одной персоной из JSON-строки. Добавьте её в persons
var vladimir = JSON.parse(personsJSON)[1]

//Сделайте цикл, который выводит весь массив persons, в форме HTML-таблицы. Имя и Фамилия - колонки. 
var str = "<table border='1'>"