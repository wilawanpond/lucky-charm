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

// Create the slot machine!
const ROWS = 3;
const COLS = 3;

// "" is key and follow the : sign is value
// This shows the symbols that you can possibly have in each row or column (we will randomly select)
const SYMBOL_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

// These are the value for each symbol
// Ex; if you get the line of C, you bet will get multiply by 3 😋
const SYMBOL_VALUE = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

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

// Create a function for collecting the total bet
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: "); // Change to enter the bet per line
        const numberOfBet = parseFloat(bet);

        //Check the validation of the input
        if (isNaN(numberOfBet) || numberOfBet <= 0 || numberOfBet > balance / lines) {
            console.log("Invalid bet, try again")
        } else {
            return numberOfBet;
        }
    }
}

let balance = deposit(); // Change the variable from const to let, so we can change the value
const numberOfLines = getNumberOfLines(); // Call the getNumberOfLines function to be stored in the constant
const bet = getBet(balance, lines); // Call the getBet function to be stored in the constant
