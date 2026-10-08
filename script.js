// SpendWise - JavaScript Foundation

// 1. Application data
let budget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// Expense data
let expenseName = "";
let expenseAmount = 0;


// 2. Function to calculate the remaining balance
function calculateRemainingBalance(budget, expenses) {
    return budget - expenses;
}


// 3. Get budget information from the user
let userBudget = prompt("Enter your total budget:");


// Check that the user entered a valid number
budget = Number(userBudget);


// 4. Get expense information from the user
expenseName = prompt("Enter the name of your expense:");

let userExpense = prompt("Enter the amount of your expense:");
expenseAmount = Number(userExpense);


// 5. Calculate total expenses
totalExpenses = expenseAmount;


// 6. Calculate remaining balance
remainingBalance = calculateRemainingBalance(budget, totalExpenses);


// 7. Display results in the browser console
console.log("===== SpendWise Budget Summary =====");
console.log("Budget: Ksh. " + budget);
console.log("Expense Name: " + expenseName);
console.log("Expense Amount: Ksh. " + expenseAmount);
console.log("Total Expenses: Ksh. " + totalExpenses);
console.log("Remaining Balance: Ksh. " + remainingBalance);
console.log("====================================");