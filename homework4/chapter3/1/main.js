//Напилить код функции modificator, такой, чтобы в результате работы кода:
//в консоли было: sampleFunc: test | sample

function sampleFunc() {
    console.log(`${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}`)
}

function modificator(func) {
    return func.bind(null, 'test', 'sample')
}

var testFunc = modificator(sampleFunc)
testFunc() //sampleFunc: test | sample