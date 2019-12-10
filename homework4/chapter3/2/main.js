//Напилить код функции modificator, такой, чтобы в результате работы кода:
// в консоль было выведено число символов в коде функции sampleFunc, т.е.:
// Symbols in my code: 93

function sampleFunc() {
    console.info(`Symbols in my code: ${arguments.callee + 0}`)
}

function modificator(func) {
    func.valueOf = function () {
        return String(func).length
    }
}

modificator(sampleFunc)

sampleFunc()