# SpendWise

## Project Description

SpendWise is a simple budget tracking application designed to help users work with their budgeting and expense information. The Week 6 version introduces JavaScript so that the application can collect user input, store data, perform calculations, and display results in the browser console.

## JavaScript Concepts Implemented

The project demonstrates several JavaScript concepts, including:

* Variables
* Data types
* User input
* Number conversion
* Arithmetic calculations
* Functions
* Console output

## Variables

Variables are used to store important budgeting information. The application uses variables such as `budget`, `totalExpenses`, `remainingBalance`, `expenseName`, and `expenseAmount`.

For example, the budget variable stores the amount of money available, while the expense variables store information about the user's spending.

## User Input

The application uses JavaScript `prompt()` to collect information from the user.

The user is asked to enter:

1. Their total budget.
2. The name of an expense.
3. The amount of the expense.

The input is then stored in variables for processing.

## Calculations

SpendWise calculates the remaining balance by subtracting the total expenses from the budget.

The calculation is:

Budget - Total Expenses = Remaining Balance

For example, if the budget is Ksh. 10,000 and the expense is Ksh. 2,500, the remaining balance is Ksh. 7,500.

## Functions

The application uses a reusable function called `calculateRemainingBalance()`.

The function receives the budget and expense amount as parameters and returns the remaining balance. Using a function helps organize the code and makes the calculation reusable.

## Displaying Results

The calculated information is displayed in the browser developer console using `console.log()`.

The console displays:

* Budget
* Expense name
* Expense amount
* Total expenses
* Remaining balance

## Project Files

* `index.html` - Contains the structure of the SpendWise webpage.
* `style.css` - Contains the styling for the webpage.
* `script.js` - Contains the JavaScript logic for user input, calculations, functions, and console output.
* `README.md` - Provides information about the project.
