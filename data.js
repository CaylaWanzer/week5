
// array (ordered) of objects(key:value pairs)
const data = [
    {name: "girlfriend", kind: "Cat"},
    {name: "Girlfriend2", kind: "Cat"},
    {name: "weezy", kind: "Dog"},
    {name: "Weezy2", kind: "Dog"},
];

 function PetToString(pet){
    return`
        PET NAME: ${pet.name}
        KIND: Good ${pet.kind}
        `;
 };
 function printPet(pet){
    console.log( PetToString(pet));
 }
//  console.log(PetToString(data[1]));
//  console.log(PetToString(data[data.length - 1]));

//  for(i=0; i<data.length; i++){
//  console.log(PetToString(data[i]));
// };

// data.forEach(PetToString);

// data.forEach( item =>console.log(PetToString(item) ) )

data.forEach(printPet);