
const person = { //object with key and value
    first: "Cayla",
    last: "Wanzer", 
    age: 25, 
    phone: "678-632-8667",
    dob: new Date ("12-09-1998")
};

// person.hobby = "pool";

console.log(person.dob)
console.log(person.phone)
// console.log(person.hobby)
console.log(person["phone"]);

const fruit = [ //array
    "apple", 
    "banana", 
    "cherry"
];
console.log(fruit[1])

fruit.push("pineapple", "orange")

console.log(fruit[4])

