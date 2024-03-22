/**
 *  
 * -----------------simple logic
 * 
 * year will be e leap year if the year is divisible by 4
 * 
 * **/


function isLeapYear(year) {
    if(year % 4 === 0){
        return true;
    }
    return false;
}


const year = isLeapYear(2052);
// console.log(year);


// ----------------------------------


/**
 * 
 * 1. those year that is not divisible by 100 && if the year is divisible by 4 === true
 * 2. if the year is divisible by 400, then it is a lep year === true
 * 3. else it is not a leap year === false
 * **/ 


function isLeapYear2(year){

    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }else if(year % 400 === 0){
        return true;
    }else{
        return false
    }

}


const isLeap1 = isLeapYear2(2100);
const isLeap2 = isLeapYear2(2400);
const isLeap3 = isLeapYear2(1900);
const isLeap4 = isLeapYear2(2052);

console.log(isLeap1, isLeap2, isLeap3, isLeap4);