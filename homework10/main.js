//makeProfileTimer
function makeProfileTimer() {
    let startTime = performance.now();
    return function () {
        alert(performance.now() - startTime);
    }
}

// проверка
// let timer = makeProfileTimer()
// const arr = [];
// for (let i = 0; i<100; i++){
//     arr.push(i)
// }
// timer();

// ========
//makeSaver
function makeSaver(foo) {
    let isStarted = false;
    let result;
    return function () {
        if (isStarted === false) {
            isStarted = true;
            return result = foo();
        } else {
            return result;
        }
    }
}

//проверка
// var saver = makeSaver(Math.random) //создает функцию-хранилище результата переданной в качестве параметра функции (Math.random 
// // в примере). На этом этапе Math.random НЕ вызывается
// var value1 = saver()              //saver вызывает переданную в makeSaver функцию, запоминает результат и возвращает его
// var value2 = saver()              //saver в дальнейшем просто хранит результат функции, и более НЕ вызывает переданную 
// //в makeSaver функцию;
// value1 === value2                 // всегда true

// var saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random()*6)])
// var value3 = saver2()
// var value4 = saver2()
// value3 === value4 // тоже должно быть true

// ========


function bindDIY(fn, context) {
    const bindedArgs = [].slice.call(arguments, 2);
    return function () {
        const fnArgs = [].slice.call(arguments);
        return fn.apply(thisContext, bindedArgs.concat(fnArgs));
    };
};


// ========

setTimeout(function () {
    let i = 5;
    return function runTimer() {
        if (i) {
            console.log(i--);
            setTimeout(runTimer, 1000);
        } else {
            console.log('Поехали!');
        }
    }()
}, 10);

//Задание 1 Ирины

let group = [{
        name: "Vasya",
        lastName: "Petrov",
        age: 18,
        notebook: false,
    },
    {
        name: "Kolya",
        lastName: "Ivanov",
        age: 31,
        notebook: false,
    },
    {
        name: "Alexey",
        lastName: "Vasiliev",
        age: 24,
        notebook: true,
    }
]
//Задание 2 Ирины

function getStudentsList(group) {
    group.forEach((value) => {
        let result = '';
        Object.keys(value).forEach(item => {
            result += `${item}: ${value[item]}, `
        })
        console.log(result)
    })
}

function addNewStudent(name, lastName, age, notebook, group) {
    group.push({
        name: name,
        lastName: lastName,
        age: age,
        notebook: notebook
    })
}

//Задание 3 Ирины

function deleteChars(string) {
    return string.split('').filter((value) => value.charCodeAt() < 1103 && value.charCodeAt() > 1040)
} //пробелы - символы, они не входит в диапазон, но таковы условия задания

//Задание 4

const arr = [0, 3, 51, 23, 5, 7, 8, 5]

function sortArray(array) {
    const copiedArr = array.slice()
    const sortedArr = [];
    while (copiedArr.length) {
        sortedArr.push(...copiedArr.splice(findSmallest(copiedArr)[1], 1))
    }
    return sortedArr

    function findSmallest(arr) {
        return arr.reduce((acc, cur, index) => cur < acc[0] ? [cur, index] : acc, [arr[0], 0])
    }
}

//Задание 5

const firstName = ["Алексей", "Владимир", "Иван"]
const lastName = ["Иванов", "Кравцов", "Васильев"]

function getFullName(arrFirstName, arrLastName) {
    const fullName = []
    for (let i = 0; i < arrFirstName.length; i++) {
        fullName.push(`${arrFirstName[i]} ${arrLastName[i]}`)
    }
    return fullName
}