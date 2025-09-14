// intialise while declaring
// const c;
//  c=10;
   // error

//  const c=  10;
 // no re declaring
// cont c=112; error

// no reassigning
// c=122;

// // scope block scoped
// if(true) {
//     const s= 222;
//     console.log("inside block" , s);
// }
// console.log("outisdeblock" , s); error

// hoisting cant access bef declare
console.log(h); // error //tdz
const h=111;
console.log(h);