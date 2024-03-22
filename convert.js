// // 12 inch 1 feet

// function inchToFeet(inch){
//     const feet = inch / 12;
//     return feet;
// }

// const anik = inchToFeet(69);
// // console.log(anik);

// // -------------------------------------

// function feetToInch(feet){
//     const inch = feet * 12;
//     return inch;
// }

// const a = feetToInch(5.5);
// // console.log(a);


// // -------------------------------------------


function inchToFeet(inch){
    const feet = parseInt(inch / 12);
    const inchRemaining = inch % 12;
    return `${feet} ft ${inchRemaining} inch.`
}


const anik = inchToFeet(66.50);
console.log(anik);
const ritu = inchToFeet(65);
console.log(ritu);

// ----------------------------------


function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}

const kilo = mileToKilometer(2);
console.log(kilo);

// ---------------------

function KilometerToMile(kilo){
    const mile = kilo * 0.621371;
    return mile;
}

console.log(KilometerToMile(2));