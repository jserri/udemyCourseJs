/*
let js = "Amazing";
console.log(10+20+32-10);
console.log("Jonas");

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);


//VARIABLE NAME CONVENTIONS

let jonas_matilda = "JM";
let $function = 27;

let person = "Jonas";
let PI = 3.1415;

//Naming Variable Good
let myFirstJob = "Coder";
let myCurrentJob = "Programmer";

//Naming Variable Bad
let job1 = "Programmer";
let job2 = "Coder";

console.log(myFirstJob);
*/

/*
//Boolean Value
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 27);
console.log(typeof "Jonas");

//Reassigned Variable
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

//Undefined Variable
let year;
console.log(year);
console.log(typeof year);

//Assigned new Value
year = 1989;
console.log(typeof year);

//Null Variable (console.log print Object not Null Value)
console.log(typeof null);

*/

/*
//VARIABLES TYPE (Let, Const, Var)

//Let can change value
let age = 30;
age =31

//Const can't Re-assigned Value
const birthYear = 1989;
birthYear = 1990; //not possible
//const job; not Possible

//Var Old Variable assign
var job = "Programmer";
job = "Teacher";

//Always Declare a Variable
lastName = "Serri"; //Bad
console.log(lastName);

*/

//BASIC OPERATOR
/*
//Math Operator
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

//Assignment Operator
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++;
x--;
x--;//Decrease by one
console.log(x);

//Comparison Operator

console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

*/

//OPERATOR PRECEDENCE (MDN Precedence operator Table)

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5); 

// let x, y; //Declare 2 undefined Variable

// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2; //Resolve first in parenthesis and after divide
// console.log(ageJonas, ageSarah, averageAge);

//STRING AND TEMPLATE LITERALS

// const firstName = 'Jonas';
// const job = 'Teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// //String Multiple Lines
// console.log('String with \n\
// multiple \n\
// lines');

// //Use Backticks
// console.log(`String with
// multiple
// lines`);

//IF STATEMENT

const age = 15;
//const isOldEnough = age >= 18; //bad

if(age >= 18) {
    console.log('Sarah can start driving License!');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
};


//STATEMENT WITH VARIABLES

const birthYear = 2002;

let century; //se non dichiariamo la variabile al di fuori dello stato, non possiamo richiamarla alla fine per il log
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
