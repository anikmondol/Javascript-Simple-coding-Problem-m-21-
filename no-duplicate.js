/**
 * array has some duplicate elements
 * 
 * **/ 


function noDuplicate(array){
    let uniq = [];
    for(let item of array){
        if(uniq.includes(item) === false){
            uniq.push(item)
        }
    }
    return uniq;
}




const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];
console.log(numbers);
const uniq = noDuplicate(numbers);
console.log(uniq);
