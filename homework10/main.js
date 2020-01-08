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
//Final Countdown

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
//myBind
