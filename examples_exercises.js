// Objects //////////////////////////////////

// let emp1 = {
//         employeeId: "1",
//         name: "Ezra",
//         jobTitle: "Theater Teacher",
//         payRate: 38.46
//     };

//     let emp2 = {
//         employeeId: "2",
//         name: "Elisha",
//         jobTitle: "Game Programmer",
//         payRate: 43.27
//     };

//     console.log("Employee 1: " + emp1.name);
//     console.log("Employee 2: " + emp2.name);

//     console.log("Cheeseburger 3: " + emp1["payRate"])

    
    
    
    
    // function printEmployeeAndPay(emp) {
    //     console.log("Name: " + emp.name);
    //     console.log("Pay: " + emp.payRate);
    //     }
    //     let emp1 = {
    //         employeeId: "1",
    //         name: "Ezra",
    //         jobTitle: "Theater Teacher",
    //         payRate: 38.46
    //     };
    //     let emp2 = {
    //         employeeId: "2",
    //         name: "Elisha",
    //         jobTitle: "Game Programmer",
    //         payRate: 43.27
    //     };
    //     printEmployeeAndPay(emp1);
    //     printEmployeeAndPay(emp2);    

    // function createPayStub(id, name, payRate, hoursWorked) {
    //     let grossPay = 0;
    //     if (hoursWorked <= 40) {
    //     grossPay = payRate * hoursWorked;
    //     }else {
    //         grossPay = (40 * payRate) +
    //         ((hoursWorked - 40) * 1.5 * payRate);
    //     }
    //     let payStub = {
    //         employeeId: id,
    //         name: name,
    //         grossPay: grossPay
    //     };
    //     return payStub;
    //     };

        
    //     let emp1PayStub =
    //         createPayStub("1", "Ezra", 38.46, 49);
    //         console.log(emp1PayStub.name + " earned $" +
    //         emp1PayStub.grossPay.toFixed(2));
        
    //     let emp2PayStub =
    //         createPayStub("2", "Elisha", 43.27, 42);
    //         console.log(emp2PayStub.name + " earned $" +
    //         emp2PayStub.grossPay.toFixed(2)) 



    // pg13 Exercise

// let persons = {
//     name: " Cayla Wanzer",
//     address: " 123 elmer street",
//     city: " Jonesboro",
//     state: " Georgia",
//     zip: " 30236"
// };
// function printContact(p){
//     return`
//      ${p.name} 
//      ${p.address} 
//      ${p.city}, ${p.state} ${p.zip}
//     `;
// };
// console.log(printContact(persons));

//pg14 exercise 

// product_string = "XYZ:1234-L"

// function parsePartCode(part){
// let pieces_array = part.split(":");

// let final_two_strings = pieces_array[1];
// let final_two_array = final_two_strings.split("-");

//     return {
//         supplierCode: pieces_array[0],
//         productNumber: final_two_array[0],
//         size: final_two_array[1]
//     }

// }
// // console.log(parsePartCode(product_string));
// let partObject = parsePartCode(product_string)

// console.log(`
//     CODE: ${partObject.supplierCode}
//     NUMBER: ${partObject.productNumber}
//     SIZE: ${partObject.size}
//     `);

// LOOPS ///////////////////////////////////////////

