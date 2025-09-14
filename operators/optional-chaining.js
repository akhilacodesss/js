// Used to safely access nested object properties without error if missing

let user = {
    profile: {
        name: "akhila"
    }
} 
;

console.log(user.profile?.name);
console.log(user.profile?.city); // undefined insytead of error