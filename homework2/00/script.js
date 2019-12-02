//Chapter 1

//assign: evaluation

//semicolon: error
//1
a = "hey"
b = 'ho'
c = '!' //пример из конспекта, будет Uncaught SyntaxError: Unexpected identifier, 
//т.к. для JS это выглядит примерно так a = "hey"b = 'ho'c = '!' 
//2 
const a = 'hey';
const b = 'ho';
const c = '!' ['h', 'o', '!'].forEach((item) => console.log(item)) // должен вернуть каждый элемент массива, вместо этого - undefined,
// так как для js это выглядит как
// const c = '!'['h','o','!'].forEach((item)=> console.log(item))
//3
for (let i = 0 i < 5 i++) { //SyntaxError: Unexpected identifier, ситуация схожая с 1
    console.log(i)
}

//semicolon: mistake

//1
if (pirate == 0) {
    alert("Все спокойно"); //alert следом за else будет срабатывать всегда
} else; {
    alert("Пираты на горизонте");
}

//2
function foo(bar) { //console.log никогда не сработает из-за автоматической вставки точки с запятой
    return
    console.log(bar)
}

//Number: age
var userAge = Number(prompt('Enter your age'));
alert('Your year of birth ' + (2019 - userAge));

//Number: temperature

//from Celcius to Fahrenheit
var userCelciusInput = Number(prompt('Enter the temperature in Celsius'));
var userFahrenheitOutput = userCelciusInput * 9 / 5 + 32;
alert('Temperature in Fahrenheit are ' + userFahrenheitOutput);

//from Fahrenheit to Celcius
var userFahrenheitInput = Number(prompt('Enter the temperature in Celsius'));
var userCelciusOutput = (userFahrenheitInput - 32) * 5 / 9;
alert('Temperature in Fahrenheit are ' + userCelciusOutput);

//Number: divide
function divide() {
    var firstNumber = Number(prompt('Enter first number'));
    var secondNumber = Number(prompt('Enter second number'));
    var result = Math.round(firstNumber / secondNumber);
    alert(result)
}

//Number: odd
function numberOdd() {
    var userInput = Number(prompt('Enter number'));
    if (isNaN(userInput) || !(isFinite(userInput))) {
        alert('Это не число или это бесконечность')
    } else if (userInput % 2) {
        alert('Число не чётное')
    } else {
        alert('Число чётное')
    }
}

//String: greeting
function greeting() {
    var userName = prompt('Enter your name');
    alert('Hello, ' + userName + " !")
}

//String: lexics
function lexics(string, searchWord) {
    if (~(string.indexOf(searchWord))) {
        alert('Такое слово или часть слова есть');
    } else {
        alert('Такого слова нет');
    }
}

//confirm
function typeOfConfirm() {
    var userInput = typeOf(confirm('Опреедляем тип конферма')); //возвращает boolean, принимающий значения true или false 

}

//Boolean + Boolean: if
function accountConfirm() {
    var userInput = confirm('У вас есть аккаунт на сайте?');
    if (userInput) {
        alert('Замечательно');
    } else {
        alert('Регистрируем новый')
    }
    return userInput
}

function fineWeather() {
    var userInput = confirm('На улице пасмурно?');
    if (userInput) {
        alert('Возьми зонтик');
    } else {
        alert('Отличная погода для пикника')
    }
    return userInput
}


//Array: real
var book = ['some text on the page', 'some other text', 'and so on'];

//Array: booleans
var arrayOfBoolean = [accountRegistred = accountConfirm(), weatherIsFine = fineWeather()]

//Array: plus
var arrayOfNumber = [1, 2]

function arrayPlus(array) { // плюсует первые два числа массива и вносит в массив их сумму
    array.push(array[0] + array[1])
}

//Array: plus string
var arrayOfString = ['hey', 'ho', "!"]

function arrayPlusString(array) { //произойдёт конкатенация
    var result = '';
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result
}

arrayPlusString(arrayOfString);

//Object: real

var notebook = {
    manufacturer: 'apple',
    ram: '8gb',
    cpu: 'i5',
    yearModel: '2017'
}

//Object: change
notebook.manufacturer = 'HP'
notebook[yearModel] = '2019'

//Comparison if

var age = +prompt("Сколько вам лет?", "");
if (age < 18) {
    alert("школьник");
} else if (age > 18 && age < 30) {
    alert("молодеж");
} else if (age > 30 && age < 45) {
    alert("зрелость");
} else if (age > 45 && age < 60) {
    alert("закат");
} else if (age > 60) {
    alert("как пенсия?");
} else if (age < 0) {
    alert("Вот это поворот");
}

//Comparison: sizes
//1 вариант (по условию)
function sizeCompasion() { //сравнение размеров женского белья, изначальная система - российская, конечная - США
    var russianSize = Number(prompt('Введите размер'))
    if (russianSize === 42) {
        alert('В системе размеров США это 8')
    } else if (russianSize === 44) {
        alert('В системе размеров США это 10')
    } else if (russianSize === 46) {
        alert('В системе размеров США это 12')
    } else if (russianSize === 48) {
        alert('В системе размеров США это 14')
    } else if (russianSize === 50) {
        alert('В системе размеров США это 16')
    } else if (russianSize === 52) {
        alert('В системе размеров США это 18')
    } else if (russianSize === 54) {
        alert('В системе размеров США это 20')
    } else if (russianSize === 56) {
        alert('В системе размеров США это 22')
    }
}
//2 вариант (по формуле)
function sizeCompasionFormula(russianSize) {
    var smallestRus = 42;
    var smallestUSA = 8;
    var result = russianSize - smallestRus + smallestUSA;
    return result;
}

//Comparison: object 
//если использовать вариант с формулой, то минимальные размеры можно заносить в объект, например

//Ternary

confirm('Вы мужчина?') ? alert('Вы таки мужчина!') : alert('Поздравляю, вы женщина!');

//Number: flats
//Условие:
//Сделайте калькулятор, который позволит вам исходя из информации о количества этажей в 
//доме и количества квартир на этаже находить подъезд и этаж определенной квартиры по её номеру. 
//Например для 9этажного дома по 4 квартиры на этаж 81 квартира находится на 3м этаже третьего подъезда.

function flats(){
    //inputData
    var floorsInHouse = Number(prompt('Введите кол-во этажей в доме'));
    var appartmentsPerFloor = Number(prompt('Введите кол-во квартир на этаж'));
    var userAppartment = Number(prompt('Введите искомую квартиру'));

    //intermediateData
    var appartmentsPerPorch = floorsInHouse*appartmentsPerFloor;

    //outputData
    var porchOutput = Math.ceil(userAppartment/appartmentsPerPorch);
    var floorOutput = Math.ceil( (userAppartment-((porchOutput-1)*appartmentsPerPorch))/appartmentsPerFloor)
    
    return {
        appartment: userAppartment,
        porch: porchOutput,
        floor: floorOutput
    }
}

