var userInput = prompt('Введите данные');
var userNumber = parseInt(userInput);
var userString = userInput.slice(-1);
var result = 0;

if (userString==='h'){
    result = userNumber*60*60;
}
if (userString==='d'){
    result = userNumber*24*60*60;
}
if (userString==='w'){
    result = userNumber*7*24*60*60;

}
if (userString==='m'){
    result = userNumber*30*24*60*60;
}

console.log(result + " секунд");