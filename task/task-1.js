// subTask-1:
// Write a function to convert temperature from Celsius to Fahrenheit.



// F = °C × 9/5 + 32-----------------




function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
}

const fahrenheit = celsiusToFahrenheit(12);
console.log(fahrenheit);



// -----------------------------------------



// subTask-2:
// Write a function to convert temperature from fahrenheit To Celsius.


// c = (f - 32) * 5/9 ---------------------------


function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9
    return celsius;
}


const celsius = fahrenheitToCelsius(53.6);
console.log(celsius);