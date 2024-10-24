

// let sumTotal = 0;

// let numbers = [6, 3, 5, 0, 2];


// let total = addThemUp(numbers)
// console.log(total);

// let quantity = numbers.length;
// let average = total / quantity;
// console.log("QUANTITY:" quantity);
// console.log("AVERAGE:", average);
// 6+3=9
// 9+5=14
// 14+0=14
// 14+2=16

// 16 / 5 = 3 + 1/5 == 3.2

function getAverage(numberList){
    let sumTotal = 0;
    for(i = 0; i< numberList.length; i++){
        let n = numberList[i];
        sumTotal += n;
    }
    return sumTotal / numberList.length;
}

console.log("AVG", getAverage([6, 3, 5, 0, 2]));

let studentList = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
    ];

    for (i = 0; i< studentList.length; i++ ){
    //    let student = studentList[i]; 
       console.log(student.name, getAverage(student.scores).toFixed(3));

    }
    