function Person(first, last, age){
    return{
        first: first,
        last: last,
        age: age
    };
};

let personObject = Person("cayla", "wanzer", 25)

console.log(`
    FIRST:${personObject.first}
    LAST: ${personObject.last}
    AGE: ${personObject.age}
`);