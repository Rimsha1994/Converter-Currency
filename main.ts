#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk";


console.log(chalk.blue.bold("\n \t Welcome to  'Code With Rimsha' - Curreency Convertor\n"));
//define the list of currencies and theirexchange rates

let exchange_rate: any = {
    "USD": 1,  // Base currency
    "EUR": 0.9, //Eurpean Currency (Euro)
    "JYP": 113, //Japenese Currency (Yen)
    "CAD": 1.3, //Canadian Dollar
    "AUD": 1.65, // Australian Dollar
    "PKR": 277.70, // Pakistani Rupee
    // Add more currencies and their exchange rates here 

}
//promt the user to select currencies to convert from and to
let user_answer=await inquirer.prompt([
    {
        name: "from_currancy",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
            
        },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);

//perform currency conversion  by using formula

let from_amount = exchange_rate[user_answer.from_currancy];
let  to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount

//formula of conversion

let base_amount = amount / from_amount
let convert_amount = base_amount * to_amount


//display the converted amount
console.log(`Converted Amount = ${chalk.green(convert_amount.toFixed(2))}`);