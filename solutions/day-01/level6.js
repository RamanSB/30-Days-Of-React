const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
};

function getPersonInfo(personData) {
    let { firstName, lastName, age, country, jobs, skills, languages } = personData;
    console.log(`${firstName} ${lastName} is ${age} years old & lives in ${country}`);
}

getPersonInfo(person);


const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

// #1
products.forEach(elem => console.log(elem['price']));

// #2
function callback(element, index, array) {
    let { product, price } = element;
    if (price == '') {
        price = 0;
    }
    console.log(`The price of ${product} is ${price} euros.`);
}
  
products.forEach(callback)


// #3 & #7
let identity = 0; // default identity
function reducer(accumalator, currentVal) {
    if (currentVal['price'] == '') {
        currentVal['price'] = 0;
    }
    return accumalator + currentVal['price'];
}
console.log(products.reduce(reducer, identity));

// #4
let prices = products.map(element => element['price']);
console.log(`${prices}`);

let productsV1 = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

// #5
let filteredArray = productsV1.filter(elem => typeof elem['price'] === "number");
console.log("Filtered array: " + JSON.stringify(filteredArray));

// #6
let result = productsV1
                .filter(elem => typeof elem['price'] === 'number')
                .map(elem => elem.price)
                .reduce((acc, curr) => {
                    return acc + curr;
                }, 0 );

console.log(`Result: ${result}`);
//#8
console.log(productsV1.find(elem => typeof elem['price'] !== 'number'));
//#9
console.log(productsV1.findIndex(elem => typeof elem['price'] !== 'number'));
//#10
console.log(productsV1.some(elem => typeof elem['price'] !== 'number'));
//#11
console.log(productsV1.every(elem => typeof elem['price'] === 'number'));

//#12 - 13 - 14
/*
12)
    for each goes through all elements in the array and takes a callback function as a parameter, the callback function
    can have the following args: element, index (optional), array - does not return anything.

    Map returns an array & transforms the values in the array according to the call back function.
    Call back function contains, element and index (optional)

    filter - callback function of filter returns a boolean. the functino param is a predicate.

    reduce - takes all the elements of an array and returns a single value, the callback is a function with 2 args, accumulator & 
    current value, the value returned from a single iteration of reduction is stored in the accumalator variable, the reduce method can 
    also take an initial identity value as a 2nd parameter. 2 params, the reducer & inital value.

13)
    filter, find & findIndex all take a callback function that return a boolean. When filtering elements that associate with a boolean of true being returned
    are retained in the array and elements corresponding to false are removed.
    
    find - finds the 1st element that satisifes the predicate in the callback,
    find - finds the idx of the  1st element that satisifes the predicate in the callback,

14) 
    From a Java 8 background (Streams)...
    some = anyMatch
    every = allMatch
    none = noneMatch    
*/