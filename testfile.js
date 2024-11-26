// function test(a, b) {
//     return a > b ? a : b;
// }

// console.log(test(5, 10));

function fizzbuzz (n)
{
    if (n % 15 == 0) return 'fizzbuzz';
    if (n % 3 == 0) return 'fizz';
    if (n % 5 == 0) return 'buzz';
    return n;
}

console.log(fizzbuzz(15));