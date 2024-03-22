// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0



function countNumber(numbers, find){ 
    let sum = 0;
    for(let number of numbers){
        if(number === find){
            sum += 1;
        }
    }
    return sum;

}


const numbers = [5,6,11,12,98, 5];
const find = 15;
const ans = countNumber(numbers, find)
console.log(ans);