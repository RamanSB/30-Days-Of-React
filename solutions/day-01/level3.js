// #1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const sortedAge = ages.sort();
console.log(`Min: ${sortedAge[0]} | Max: ${sortedAge[sortedAge.length-1]}`);

let median = undefined;
if (sortedAge.length%2 == 0) {
    let midIdx = sortedAge.length / 2;
    median = (sortedAge[midIdx] + sortedAge[midIdx-1])/2;
} else {
    median = (sortedAge.length - 1) / 2;
}
console.log(`Median: ${median}`);

let sum = 0;
for(let i=0; i<ages.length; i++) {
    sum += ages[i];
}
console.log(`Average (mean): ${sum/sortedAge.length}`);


// #2
let countries = require('./countries.js');
console.log(countries.slice(0, 10));
countries = countries.slice(0,10);
if (countries.length %2 == 0) {
    let midIdx = countries.length / 2;
    console.log(`Middle countries: ${countries[midIdx-1]} & ${countries[midIdx]}`);
} else {
    console.log(`Middle country: ${countries[(countries.length-1)/2]}`);
}

// #3
// Skipping flow-control as I am comfortable with this already.