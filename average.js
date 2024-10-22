

// let sumTotal = 0;

function getAverage(numberList){
    let sumTotal = 0;
    for(i = 0; i< numberList.length; i++){
        let n = numberList[i];
        sumTotal += n;
    }
    return sumTotal / numberList.length;
}
let numbers = [6, 3, 5, 0, 2];

console.log("AVG":, getAverage([6, 3, 5, 0, 2]));
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