// redeclaration not allowed
let b=10;
// let b=20; // err
console.log(b); //10 

//re assigment allowed
 b=30;
 console.log("reassigne", b);

 // block scoped outside block
 if (true) {
    let y = 122;
    console.log(y);
 }
  // console.log(y); error

  // hoisting
// console.log(z); error // cant access bef declaring
let z=333;
console.log("afterdec" , z);