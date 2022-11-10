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

let description = country;
description += ' ';
description += 'is in ';
description += continent;
description += ', and its';
description += ' ';
description += itaPopulation;
description += ' ';
description += 'million people speak';
description += ' ';
description += language;

console.log(description);