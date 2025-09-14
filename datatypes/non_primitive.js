let person = {
    name : "a",
    age :21,
    isStudent : true
};
console.log(person.name);
console.log(typeof person    
);  // object


// array
let num= [10, 11, 12, 13];
console.log(num[2]);
console.log(typeof num);   // object


//function
function greet(){
    return "hi";
}
console.log(greet());
console.log(typeof greet); // function


// copy by ref

let arr1=[1,2,3,4];
let arr2= arr1;

arr2.push(5);
console.log(arr1); // [1,2,3,4,5] also changes
console.log(arr2); // [1,2,3,4,5]

// spread operator to avoid copy by ref
 let arr3=[1,2,0,4];
 let arr4= [...arr3];
 arr4.push(11);

 console.log(arr3); // [1,2,0,4]
 console.log(arr4); // [1,2,o,4,11]