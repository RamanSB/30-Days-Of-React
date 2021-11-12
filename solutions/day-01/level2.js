// #1
var webTechs = require('./web_techs');
var countries = require('./countries');

console.log(`Countries: ${countries}`);
console.log(`WebTechs: ${webTechs}`);

// #2
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
text = text.replace(/[,.]/g, "");
console.log(text);

const words = text.split(/\s/);
console.log(`There are ${words.length} in the sentece: ${text}`);

// #3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
console.log(shoppingCart.splice(shoppingCart.indexOf("Honey"), 1));
shoppingCart[3] = 'Green '.concat(shoppingCart[3]);
console.log(shoppingCart);

 // #4
 if (countries.includes('Ethiopia')) {
     console.log(`ETHIOPIA`);
 } else {
     countries.push(`Ethiopia`);
 }

 // #5
 if (webTechs.includes('Sass')) {
     console.log(`SAss is a CSS preprocess`);
 } else {
     webTechs.push('Sass');
 }


 //#6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

