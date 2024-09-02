// Task 1: Variables and Data Types

let employeeName = "Jane Doe";
const employeeID = 112;
var isActive = true

console.log(typeof(employeeName));
console.log(typeof(employeeID));
console.log(typeof(isActive));



// Task 2: Compound Data Types

let products = ["tshirt", "beanie", "hoodie"];
const productDetails = {
    name: products,
    price: 15.00,
    inStock: true,
}

console.log(products, productDetails);



// Task 3: Assignment Operators

let accountBalance = 1000.00

console.log(accountBalance+15);
console.log(accountBalance-45);
console.log(accountBalance+(15*5));
console.log(accountBalance%15);
console.log(accountBalance/15);



// Task 4: Comparison Operators

let employeeScore1 = 4;
let employeeScore2 = 2;

console.log(employeeScore1 < employeeScore2);
console.log(employeeScore1 > employeeScore2);
console.log(employeeScore2 >= employeeScore1);
console.log(employeeScore2 <= employeeScore1);
console.log(employeeScore2 === employeeScore1);
console.log(employeeScore2 !== employeeScore1);



// Task 5: Logical Operators

var hasKeyCard = true;
var hasPermission = true;

console.log(hasKeyCard && hasPermission);
console.log(hasKeyCard || hasPermission);

console.log(!hasKeyCard && hasPermission);
console.log(!hasKeyCard || hasPermission);

console.log(hasKeyCard && !hasPermission);
console.log(hasKeyCard || !hasPermission);