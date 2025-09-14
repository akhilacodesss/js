// array
// let num= [10, 11, 12, 13];
// console.log(num[2]);
// console.log(typeof num); 

//\ class 3 add
//ex1
//  for(let n=1; n<=5; n++) {
//  console.log("n: " , n)
//  }

//ex 2
//  for(let n=5; n>0; n--) {
//     console.log(n)
//  }
 
//ex3
//  for(let i=0; i<=10; i+=2) {
//     console.log(i)
//  }

//ex4
// const mobile=["Oppo", "lg", "apple"];
// console.log(mobile[0]);

// for(let i=0; i< mobile.length; i++){
//     console.log(mobile[i])
// }

//ex5
// for (let i=1; i<=10; i++) {
//     if(i===3) {
//         continue;
//     }
//     if(i===5) {
//         break;
//     }
//     console.log(i)
// }

// let order =["cb" , "fries", "burg" ];
// let items=[2,2,5];

// const cart= [50 , 90 , 87 , 11, 67];
// let totalval= 0;
//  for( let i=0; i< cart.length; i++) {
//     totalval = totalval + cart[i]
//  }
//  console.log(totalval)

// attendence ssytem

// const s= [ " aa" , "bb" , "cc"];
// const present= [ true, false , fasle];

// for(let i=0; i< s.length; i++) {
//     if (present[i]) {
//         console.log("present")
//     } else {
//         console.log("abs")
//     }
// }

// for in
// const order ={
//     burg  :2,
//     cb :3,
//     coke:4,
//     fries :2 
// }

// for (let items in order) {
//     console.log(items, ":", order[items])
// }


// for of

// const prices= [ 200, 300, 500];
// let total =0;

// for(let price of prices) {
//    total += price;
// }
// console.log(total)

//console.log();
 
// Left shift 10 by 2 (10 << 2) and print the result.
// Right shift 20 by 3 (20 >> 3) and print the result.

// let sum=0;
// for (let i=1; i<=5; i++) {
    
//     console.log(i);
//     sum+=i;
// }
// console.log(sum);

// let name="akh";
// console.log(name);
// greet();
// function greet() {
//     console.log("name");
// }
// greet();
// console.log(name);



// let person ={
//     name: "akla",
//     fname: "akhila",
//     lname: "goundla",
//     age: 21,
//     city: "hyd",
//     state: "Tg",
//     country: "ind",
//     fulldetails : function() {
//         return "full details of the person"
//     },

//     fullname: function () {
//         return this.fname+ " " + this.lname;    },

//     address :{
//         state:{
//             area: "1st cross",
//             zip: 501023,
//         }
//     },

//     hobbies : [ "writing", "dancing" , "walking"]

// }

// console.log(person.fulldetails());


let mobile = {
    name: "iphone",
    price : 33333,
    model : "15",
    inStock: true
}
// //ex1
// for(let key in mobile) {
//     console.log(key , ":" , mobile[key])
// }
// //ex2 will return array of keys
// Object.keys(mobile).forEach(key => {
//     console.log(key, ":" , mobile[key])
// })

// ex3 object.values() returns ony the aray of values
// Object.values(mobile).forEach(value => {
//    console.log(value)
// })

//ex4  returns an array of key , values pairs
Object.entries(mobile).forEach(([key,value]) => {
 console.log(key , ":" ,  value)
})


let personJson = `{
"name" : "venkat",
"city" : "hyd",
"age" :20 
 }`;

 // JSON TO JS 
 let obj= JSON.parse(personJson);
 console.log(obj)

 for (let key in obj) {
    console.log (key , " " , obj[key])
 }


 // JS TO JSON

 let config = {
    name : "akla",
    age:11,
    place : "hyd"
 }

 let jsonString = JSON.stringify(config);
 console.log(jsonString)

