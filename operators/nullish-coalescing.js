// Provides a default value only if the variable is null or undefined.

// let result = value1 ?? value2;
// If value1 is NOT null/undefined, result = value1.

// If value1 is null/undefined, result = value2.

// let user = null;
// console.log( user ?? "akhila"); 
// // output akhila 

// let name ="akhila";
// console.log(name ?? "guest");
// output akhila name is not null 

let count = 0;

console.log(count || 10);  // 10  → because 0 is falsy in OR
console.log(count ?? 10);  // 0   → because 0 is NOT null/undefined

// || → replaces if value is falsy (false, 0, "", null, undefined, NaN)
