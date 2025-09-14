// && both true
// ` any one
// not !

// let age =20;
// let hasID=true;

// if(age >=18 && hasID) {
//     console.log("you can enter");
// } else {
//     console.log("cant enter");
// }


// let hasTiket= false;
// let hasVIP= true;
 
// if(hasTiket || hasVIP) {
//     console.log(" enter");
// } else {
//     console.log("na");
// }

// let isloggedin= false;
// if (!isloggedin) {
//     console.log("pls login in");
// }

let age = 20;
let hasID = true;

console.log(age >= 18 && hasID);  // true (AND)
console.log(age >= 18 || hasID);  // true (OR)
console.log(!hasID);              // false (NOT)
