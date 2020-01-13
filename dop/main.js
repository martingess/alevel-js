function XO(str) {
  const strArr = str.split('')
  const o = strArr.reduce((acc, current)=> current === "o" || current === "O" ? acc + 1 : acc + 0, 0)
  const x = strArr.reduce((acc, current)=> current === "x" || current === "X" ? acc + 1 : acc + 0, 0)
  return x == o 
}