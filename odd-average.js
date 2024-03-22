/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 * 
 * 
 * **/ 


function oddAverage(numbers){
    let sum = 0;
    let odd = [];
    for(let number of numbers){
        if(number % 2 === 1){
            sum += number;
            odd.push(number);
        }
    }
    const avg = sum / odd.length;
    return avg;
}

const numbers = [42, 13, 58, 65, 81, 96, 7, 5];
const avg = oddAverage(numbers);
console.log(avg);