var num = 100
var divisible = false


for (var i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
        document.write('Fizz')
        divisible = true
    }
    else if(i % 5 == 0){
        document.write('Buzz')
        divisible = true
    }
    else {
        document.write(i)
    }
    document.write('<br />')
}