var str = 'abcde'
console.log(str[0],str[1],str[4])
console.log(str.charAt(0), str.charAt(1), str.charAt(4))

for (var i = 0; i < str.length; i++){
    if( str[i] === 'a' || str[i] === 'b' || str[i] === 'e'){
        console.log('Я знаю эту букву');
    }
}