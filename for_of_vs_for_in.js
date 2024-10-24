

const listOfChildren = ["natalie", "Brittany", "zachary"];
listOfChildren.unshift('bianca'); // inserts in the begining
listOfChildren.push("kevin");
for(let childName of listOfChildren){
    console.log(childName);
}


const peopleObject = { billy: 111, janey: 222, pricilla: 333};

for(const key in peopleObject){
    const score = peopleObject[key]
    console.log(`The student ${key.toUpperCase()}* has a score of ${score}.k`);
}