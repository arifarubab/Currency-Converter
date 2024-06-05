import inquirer from "inquirer";
let exchange_rate = {
    "USD": "1",
    "EUR": "0.9",
    "JYP": "113",
    "AUD": "1.65",
    "CAD": "1.3",
    "PKR": "280"
};
let userAnswer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from",
        choices: ["USD", "EUR", "JYP", "AUD", "CAD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into",
        choices: ["USD", "EUR", "JYP", "AUD", "CAD", "PKR"]
    },
    { name: "amount",
        type: "input",
        message: "Enter the amount to convert",
    }
]);
let from_amount = exchange_rate[userAnswer.from_currency];
let to_amount = exchange_rate[userAnswer.to_currency];
let amount = userAnswer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(`Converted Amount = ${converted_amount}`);
