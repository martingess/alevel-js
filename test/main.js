var readContent = ( str = "student" ) => {
    var i = str.length, res = ""
    while ( i --> -1 )
        res += str.substr ( i + 1, 1 )
    return res
}

console.log (
    readContent ( "12345" )
)