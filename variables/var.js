// redeclaring
var a=10;
var a=20;
console.log(a);

//re assigning
a=30;
console.log(a);

// scope function not blocked
if (true) {
var x=11;
}
console.log("outside" , x);

//hoisting 
console.log("befd" , y); // undefined
var y=10;
console.log ("varo" , y);
