import { Prompt } from "prompt-sync";

function testingMultiArgs() {
    console.log(`Arguments: ${arguments}`);
    console.log(`Arguments: ${JSON.stringify(arguments)}`);
    console.log(arguments.length);
    console.log(arguments.callee);
    const argArray = Object.values(arguments);
    console.log(`ArgArray: ${argArray}`);
}

testingMultiArgs(213,125125, "asfaa", true);

// #1
function fullName(firstName, lastName) {
    return firstName.concat(` ${lastName}`);
}

console.log(fullName("Ramandeep", "Bedi"));

// #2
function addNumbers(x, y) {
    return x + y;
}

console.log(addNumbers(4, 4));

// # 3
function _areaOfCircle(radius) {
    return Math.PI * radius ** 2;
}

console.log("Area of circle with 5 units is: " + _areaOfCircle(5) + "sq units"); 

// #4
function convertCelciusToFarenheight(celcius) {
    return (celcius * 1.8) + 32;
}
console.log(`0 degrees celcius is equal to: ${convertCelciusToFarenheight(0)} degrees farenheight`);
console.log(`1 degrees celcius is equal to: ${convertCelciusToFarenheight(1)} degrees farenheight`);
console.log(`100 degrees celcius is equal to: ${convertCelciusToFarenheight(100)} degrees farenheight`);

// #5
function calculateBmi(height, weight) {
    let bmi = (weight) / (height ** 2);
    switch (true) {
        case bmi < 18.5:
            console.log(`${bmi} is underweight`);
            break;
        case bmi >= 18.5 && bmi < 24.9:
            console.log(`${bmi} is normal weight`);
            break;
        case bmi > 25 && bmi < 29.9:
            console.log(`${bmi} is overweight`);
            break;
        default: 
            console.log(`${bmi} is obese.`);
            break;
    }
    return bmi;
}

console.log(calculateBmi(2, 85));

// #6
function checkSeason(month) {
    switch (month) {
        case 'December':
        case 'January':
        case "February":
            return "Winter"
        case "March":
        case "April":
        case "May":
            return "Spring";
        case "June":
        case "July":
        case "August":
            return "Summer";
        case "September":
        case "October":
        case "November":
            return "Autumn";
    }
}

console.log(checkSeason("April"));

// #5
function reverseArray(arr) {
    let newArray = [];
    for (let i=arr.length - 1; i>=0 ; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}
const inputArr = ["alpha", "beta", "gamma"];

console.log(reverseArray(inputArr));

// #6
function capitalizeArray(arr) {
    const updatedArray = [];
    for (let elem of arr) {
        updatedArray.push(elem[0].toUpperCase() + elem.substring(1, elem.length));
    }
    return updatedArray;
}

console.log(capitalizeArray(["dog", "treats", "pedigree", "hehe"]));

// #7
function addItem(item) {
    return [item];
}

// #8
testArray = ["Halo", "Ben & Jerry", "Magnum", "Cornetto", "Feast"];
function removeItem(idx) {
    testArray.splice(idx, 1);
    return testArray;
}

console.log(removeItem(2));

// #13
function sum() {
    let sum = 0;
    for (let key in arguments) {
        sum+=arguments[key];
    }
    return sum;
}

console.log(`Sum: ${sum(35,123,51,25,15)}`);

// #1
function userIdGenerator(userIdLength) {
    const values = Array(26).fill(65).map((e, i) => e + i);
    const alphabet = values.map(x => String.fromCharCode(x)).map(x => x.toLowerCase());
    const alphabetUpperCase = values.map(x => String.fromCharCode(x)).map(x => x.toUpperCase());
    const setOfCharacters = alphabet.concat(alphabetUpperCase).concat([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const userGeneratedId = [];
    for (let i=0; i<userIdLength; i++) {
        let randomIdx = Math.round((Math.random() * setOfCharacters.length-1));
        userGeneratedId.push(setOfCharacters[randomIdx]);
    }    
    return userGeneratedId.join("");
}

console.log(userIdGenerator());


// // #1
// const prompt = Prompt();
// function userIdGeneratedByUser() {
//     let noOfCharacters = prompt("Enter number of characters in ID: ");
//     let noOfIds = prompt("Enter number of id's to generate?");
//     for (let i=0; i<noOfIds; i++) {
//         console.log(userIdGenerator(noOfCharacters));
//     }

// }

// userIdGeneratedByUser(5, 10);


// #2
function generateColors(){ 
    
}