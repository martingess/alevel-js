// Создайте объект, свойства которого описывают содержимое дамской сумочки
// Создайте метод объекта, позволяющий удалить что-то из сумочки
// Создайте метод объекта, позволяющий положить что-то в сумочку

var ladyBag = {
    katana: "katana",
    bookOfDeath: "bookOfDeath",
    powder: "powder",
    putOff(strName) {
        delete ladyBag[strName];
    },
    putIn(name) {
        ladyBag[name] = name
    }
}

//Объявить конструктор LibraryBook, 
//с помощью которого можно создавать и редактировать объекты, хранящие информацию о книгах в библиотеке

function LibraryBook(bookName, year, author, readerName, readerData) {
    var title = bookName;
    var year = year;
    var author = author;
    var readerName = readerName;
    var readerData = readerData

    function giveTheBook(client) {
        readerName = client;
        readerData = new Date();
    }
    this.getBookInfo = function () {
        console.log(readerData)
    }
    this.getTheBook = function (client) {
        if (readerName) {
            return null
        } else {
            giveTheBook(client)
        }
    }
    this.returnBook = function () {
        readerName = '';
        readerData = '';
    }
}

//Объявите конструктор, который создает экземпляры с унаследованным методом addProperty

//первый вариант
function Add() {
    Add.prototype.addProperty = function (name, value) {
        this[name] = value
    }
}
//второй вариант
var add2 = Object.create({
    addProperty: function (name, value) {
        this[name] = value
    }
})