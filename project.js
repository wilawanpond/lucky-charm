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

    // Return the number from the function using while loop
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        // Convert string to number
        const numberDepositAmount = parseFloat(depositAmount);

        // Check the validation of the input
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again!")
        } else {
            return numberDepositAmount; // Break the loop
        }
    }
};

// Create a function for number of lines to bet on
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        // Convert string to number (if need be)
        const numberOfLines = parseFloat(lines);

        // Check the validation of the input
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again!")
        } else {
            return numberOfLines; // Break the loop
        }
    }

};

const depositAmount = deposit(); // Call the deposit function to be stored in the constant
const numberOfLines = getNumberOfLines(); // Call the number of lines function to be stored in the constant
