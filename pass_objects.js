const person = { //object with key and value
    first: "Cayla",
    last: "Wanzer", 
    age: 25, 
    phone: "678-632-8667",
    dob: new Date ("12-09-1998")
};

const person2 = { //object with key and value
    first: "Kevin",
    last: "Long", 
    age: 57, 
    phone: "589-457-8965",
    dob: new Date ("12-09-1970")
};

function printLabel(p){
    return`
    NAME: ${p.first} ${p.last}
    PHONE: ${p.phone}
    `;
};

console.log(printLabel(person));
console.log(printLabel(person2));
console.log(printLabel({first:"danny", last:"boy", phone:"555-bone"}));