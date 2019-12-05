//18. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
let str = 'я учу javascript!'
let strSubstr = str.substr(2, 14);
let strSubstring = str.substring(2, 16)
let strSlice = str.slice(2, 16)

console.log(strSubstr)
console.log(strSubstring)
console.log(strSlice)