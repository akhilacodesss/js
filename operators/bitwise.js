let p = 5;   // 101 in binary
let q = 1;   // 001 in binary

console.log(p & q);   // 1 (AND → 101 & 001 = 001)
console.log(p | q);   // 5 (OR  → 101 | 001 = 101)
console.log(p ^ q);   // 4 (XOR → 101 ^ 001 = 100)
console.log(~p);      // -6 (NOT → flips all bits)
console.log(p << 1);  // 10 (Left shift → 1010)
console.log(p >> 1);  // 2 (Right shift → 10)
