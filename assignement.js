//Dichiarazione Variabile (1)
const country = "Italy";
const continent = "Europe";
let itaPopulation = 59433744;

console.log(country);
console.log(continent);
console.log(itaPopulation);

//Typeof Variables (2)
const isIsland = false;
const language = "Italian";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//Variable Type (3) let, const, var

//Basic Operator(4)
itaHalfPopulation = itaPopulation / 2;
console.log(itaHalfPopulation);

itaPopulation++;
console.log(itaPopulation);

let finPopulation = 6000000;

const itaFinAvrPop = itaPopulation > finPopulation;
console.log(itaFinAvrPop);

let avrCountryPop = 3300000;

const avrItaPopulation = itaPopulation < avrCountryPop;
console.log(avrItaPopulation);

let descr = country + ' ' + 'is in ' + continent + ', and its ' + itaPopulation + ' million people speak ' + language;
console.log(descr);


//TEMPLATE LITERALS
let descriptionLiterals = `${country} is in ${continent}, and it's ${itaPopulation} million people speak ${language}`;
console.log(descriptionLiterals);



//Coding Challenge #1

//Test 1
let markWeight1 = 78;
let markHeight1 = 1.69;
let johnWeight1 = 92;
let johnHeight1 = 1.95;

//Test 2
let markWeight2 = 95;
let markHeight2 = 1.88;
let johnWeight2 = 85;
let johnHeight2 = 1.76;

//BMI Test 1
let bmiMark1 = markWeight1 / (markHeight1 * markHeight1);
console.log(bmiMark1);

let bmiJohn1 = johnWeight1 / (johnHeight1 * johnHeight1);
console.log(bmiJohn1);

//BMI Test 2
let bmiMark2 = markWeight2 / (markHeight2 * markHeight2);
console.log(bmiMark2);

let bmiJohn2 = johnWeight2 / (johnHeight2 * johnHeight2);
console.log(bmiJohn2);

//Compare Test 1
let markHigherBMI1 = bmiMark1 > bmiJohn1;
console.log(markHigherBMI1);

//Compare Test 2
let markHigherBMI2 = bmiMark2 > bmiJohn2;
console.log(markHigherBMI2);

//IF ELSE STATEMENT

// if(itaPopulation > 33000000) {
//     console.log(`Italy's population is above average`);
// } else {
//     let averagePopulation = 33000000 - itaPopulation;
//     console.log(`Italy's population is ${averagePopulation} million below average!`);
// }

// CODING CHALLENGE #2

if(bmiMark1 < bmiJohn1) {
    console.log(`Mark's BMI (${bmiMark1}) is Higher than John's (${bmiJohn1})`);
} else {
    console.log(`John's BMI (${bmiJohn1}) is Higher than Mark's (${bmiMark1})`);
}