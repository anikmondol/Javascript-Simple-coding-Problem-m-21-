// Task-3:
// Write a function to count the number of vowels in a string.



function countNumber(str){
    let sum = 0;
    for(let s of str){
        console.log(s);
        if(s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u'){
            sum += 1;
        }
    }
    return sum;
}


// const str = 'Write a function to count the number of vowels in a';
const str = 'anik Mondal'
const ans = countNumber(str);
console.log(ans);