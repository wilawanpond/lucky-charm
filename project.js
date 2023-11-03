/*
Things to do!
    1. Player deposits some money
    2. Determine number of lines to bet on
    3. Collect a bet amount
    4. Spin the slot machine
    5. Checking if the player won
    6. Give the user their winnings
    7. Play again!
*/

// Import the package
const prompt = require("prompt-sync")(); // get player inputs

// Create a function for "deposit" (new style)
const deposit = () => {
    const depositAmount = prompt("Enter a deposit amount: ");
    // Convert string to number
    const numberDepositAmount = parseFloat(depositAmount);

    // Check the validation of the input
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again!")
    }
};
