// function greet () {
//     console.log("hi");
// }
// greet();

// function greet(name) {
//     console.log("hello" + name);
// }
// console.log("akhila");

// function add(a,b) {
//     return a+b;
// }

// let result = add(2,3);
// console.log(result);

// const isEven= function(number) {
//     return number%2===0;
// }
// console.log(isEven(10));

// function checkLogin(username , password) {
//     if (username === "admin" && password === "000") {
//         return "successfull";
//     } else {
//         return " not logged in";
//     }
// }

// console.log(checkLogin("admin" , "000"));
// console.log(checkLogin("aaaa" , "111"));

// IIFE

// ( function () {
//     console.log("iife");
// }) ();

// (function greet() {
//     console.log("hi");
// }) ();


//closure

// function outer() {
//     let counter=0;
// function inner() {
//     counter++;
//     return counter;
// }    
// return inner;
// }

// const incre= outer();
// console.log(incre());


let balance=1000;

function deposit(amount) {
    balance += amount;
    console.log("deposited:  " + amount);
}

function getBlance(){
   console.log("balance is :" , balance)
}

getBlance();
deposit(300);
getBlance();
 balance =1;
 getBlance();