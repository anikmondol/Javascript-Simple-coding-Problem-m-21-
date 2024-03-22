// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming


function findLongest (str){
    let words = str.split(" ");
    let longest = "";
    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}

const sen = 'I am learning Programming to become a programmer';

const ans = findLongest(sen);
console.log(ans);