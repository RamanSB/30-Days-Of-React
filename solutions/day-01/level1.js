//#1
const arr = [];
//#2
const arr1 = Array(6).fill(1);
//#3
console.log(`Array length: ${arr1.length}`);
//#4
console.log(arr1[0]);
console.log(arr1[arr1.length-1]);
console.log(arr1[(arr1.length-1)/2]);
//#5
const mixedDataTypes = ['lol', 2, 5, false, "hallo", null];
//#6
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
//#7
console.log(`itCompanies: ${itCompanies}`);
// #8
console.log(itCompanies.length);
// #9
console.log(itCompanies[0]);
console.log(itCompanies[(itCompanies.length-1)/2]);
console.log(itCompanies[itCompanies.length-1]);
// #10
itCompanies.forEach(company => console.log(company));
console.log(itCompanies.toString());
// #11
itCompanies
    .map(company => company[0] = company[0].toUpperCase().concat(company.substring(1)))
    .forEach(company => console.log(company));
// #12
let amazon = itCompanies.pop();
let initialString = itCompanies.join(", ");
console.log(initialString, " and ", amazon, "are big IT companies.")
// #13
let input = `Amazon`;
if (itCompanies.includes(input)) {
    console.log(`Found`, input); 
} else {
    console.log(`Company: ${input} not found.`);
}
// ¢14
for (let i=0; i<itCompanies.length; i++) {
    let count = 0;
    const companyArray = itCompanies[i].split("");
    for (let j=0; j<companyArray.length; j++) {
        if(companyArray[j].toLowerCase() == 'o') {
            count++;
        }
    }
     if(count > 1) {
        console.log(`${itCompanies[i]} contains more than 1 O.`);
    }
}

// #15
console.log(itCompanies.sort());

// #16
console.log(itCompanies.reverse());

// #17
console.log(itCompanies.slice(3));

// #18
console.log(itCompanies.slice(0, 3));

// #19
console.log(itCompanies)