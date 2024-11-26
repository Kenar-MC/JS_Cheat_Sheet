
function test(a, b) {
    return a > b ? a : b;
}

console.log(test(5, 10));


// ==============================================================================


function fizzbuzz (n)
{
    if (n % 15 == 0) return 'fizzbuzz';
    if (n % 3 == 0) return 'fizz';
    if (n % 5 == 0) return 'buzz';
    return n;
}

console.log(fizzbuzz(15));


// ==============================================================================


array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

takeEvenNumbers(array1);
takeOddNumbers(array1);

function takeEvenNumbers(arr)
{
    for ( let i = 0 ; i < arr.length ; i++ )
    {
       for (const number of arr)
       {
           if ( number % 2 == 0 )
           {
               console.log(number);
           }
       }
    }
}

function takeOddNumbers(arr)
{
    for ( let i = 0 ; i < arr.length ; i++ )
    {
        if ( arr[i] % 2 != 0 )
        {
            console.log(arr[i]);
        }
    }
}