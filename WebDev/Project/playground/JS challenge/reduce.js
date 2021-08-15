// 1
const letters = ['h', 'e', 'l', 'l', 'o']
const greeting = ['h', 'e', 'l', 'l', 'o'].reduce(function(previous, current, index, array) {
    return previous + current
}, )
// The below line should console.log: "hello"
console.log(greeting) 

// 2 - uncomment lines 9 and 11
const numbers = [ 100, 3, 4, 1, 2];
const total = multiplyBetween(100,2);

//(accumulator, currentValue) => accumulator * currentValue;
// The below line should console.log: 2400
console.log(total); 

//Bonus - uncomment lines 15 and 17
const arrays = [["how", "now"], ["brown", "cow"]];
//const flattenedArray = arrays.reduce( // your code here);
// The below line should console.log: ["how", "now", "brown", "cow"]
//console.log(flattenedArray);