var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let ar = [];
for (let i = 0; i < numbers.length; i++){
    if (!ar.includes(numbers[i])) {
        ar.push(numbers[i])
    }
}

console.log(...ar);


//------- Another way  ---------

// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// console.log(...new Set(numbers))