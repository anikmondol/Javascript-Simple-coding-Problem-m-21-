/**
 * function takes an array as parameter
 * give me the average of the even numbers in the array
 * 
 * 
 * **/ 


function evenAverage(numbers){
    let sum = 0;
    const even = [];
    for(let number of numbers){
        if(number % 2 === 0){
            sum += number;
            even.push(number);
        }
    }
    const avg = sum / even.length;
    return avg;
}



const avg = evenAverage([10, 20, 13]);
console.log(avg);