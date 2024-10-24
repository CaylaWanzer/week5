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



    // pg13 Exercise ////////////////////////////////////

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

//pg14 exercise ///////////////////////////////////////////////////////

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

// let kids = ["Natalie", "Brittany", "Zachary"];
// for(let i = 0; i < 3; i++) {
// console.log(kids[i]);
// };

// let kids = ["Natalie", "Brittany", "Zachary"];
// for(let i = 0; i < kids.length; i++) {
// console.log(kids[i]);
// };

// returns an array of names
// function getKids() {
//     let kids = ["Natalie", "Brittany", "Zachary"];
//     return kids;
//     }
    
//     function displayKids(kids) {
//         let numKids = kids.length;
//         for(let i = 0; i < numKids; i++) {
//         console.log(kids[i]);
//         }
//     }
//     let ourKids = getKids();   
//     displayKids(ourKids); 


// function getMealCost(orders) {
//     let sum = 0;
//     let numOrders = orders.length;
//     for(let i = 0; i < numOrders; i++) {
//     sum += orders[i].price;
// }
// return sum;
// }
// let myOrder = [
//     {item: "Chicken Tacos", price: 8.95},
//     {item: "Guacamole", price: 2.85},
//     {item: "Sweet Tea", price: 2.75}
//     ];
// let yourOrder = [
//     {item: "Hamburger", price: 6.95},
//     {item: "Fries", price: 2.25},
//     {item: "Sweet Tea", price: 2.75},
//     {item: "Fried Apple Pie", price: 4.95}
//     ];

// let mealCost = getMealCost(myOrder);
// let totalWithTip = mealCost * 1.2;
// console.log("My meal costs " + totalWithTip.toFixed(2));

// mealCost = getMealCost(yourOrder);
// totalWithTip = mealCost * 1.2;
// console.log("Your meal costs " + totalWithTip.toFixed(2));


// expanding an array////////////////////////////////////
// let kids = ["Natalie", "Brittany", "Zachary"];
// kids[3] = "Brandon";
// kids[5] = "Christina";
// console.log(kids);

// ["Natalie",
// "Brittany",
// "Zachary",
// "Brandon",
// "Christina"]

// let teams = ["Red Sox", "Rangers", "Blue Jays",
//     "Astros", "White Sox", "Rangers"];

//     let index = teams.indexOf("Rangers", 3); // returns 1
//     if (index == -1)
//         console.log("Item not found");
//         else
//         console.log("Item at position: " + index);

// let teams = ["Red Sox", "Rangers", "Blue Jays",
//     "Astros", "White Sox", "Rangers"];
//     let firstIndex = teams.indexOf("Rangers"); 
//     let lastIndex = teams.lastIndexOf("Rangers"); 
//     console.log(firstIndex);
//     console.log(lastIndex);
    
// let menu = [
//     {id: 1, item: "Tacos", category: "Meal", price: 12.29},
//     {id: 2, item: "Burger", category: "Meal", price: 7.29},
//     {id: 3, item: "Salad", category: "Meal", price: 8.29},
//     {id: 4, item: "Ice tea", category: "Drink", price: 2.19},
//     {id: 5, item: "Coke", category: "Drink", price: 2.29},
   
//     ];
//     function getMenuItemsInCategory(menu, category) {
//         let matching = [];
//         let numItems = menu.length;
//         for(let i = 0; i < numItems; i++) {
//         if (menu[i].category == category) {
//             matching.push(menu[i]);
//             }
//         }
//     return matching;
    
// }
//     // show all the drinks
//     let drinks = getMenuItemsInCategory(menu, "Drink");
//     let numDrinks = drinks.length;
//     for(let i = 0; i < numDrinks; i++) {
//         console.log(drinks[i].item +
//          " $" + drinks[i].price.toFixed(2));
    // }


    //////sorting an array/////////////////

//  let kids = ["Natalie", "Brittany", "Zachary"];
// kids.sort(); // Sorts the array
// let numKids = kids.length;
// for(let i = 0; i < numKids; i++) {
// console.log(kids[i]);
// }



let kids = [ "Brittany", "Zachary"];
// kids.push("cayla");
for(let i = 0; i < 3; i++) {
console.log(kids[i]);
}













