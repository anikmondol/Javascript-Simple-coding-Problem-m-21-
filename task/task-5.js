// Task-5:
// Generate a random number between 10 to 20.


// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }
  
//   const rndInt = randomIntFromInterval(10, 20)
//   console.log(rndInt)



function randomTenToTwenty(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const random = randomTenToTwenty(10, 20);
console.log(random);