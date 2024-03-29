import inquirer from "inquirer";
let myBalance = 20000;
let mypin = 1234;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Please provide  pincode."
    }
]);
if (pinAns.pin === mypin) {
    console.log("correct pin code");
    let operations = await inquirer.prompt([
        {
            name: "transaction",
            type: "list",
            message: "Please select your transaction.",
            choices: ["withdraw", "fast cash", "check balance"],
        },
    ]);
    if (operations.transaction === "withdraw") {
        let transactionans = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                massage: "Enter your amount",
            },
        ]);
        if (transactionans.amount < myBalance) {
            myBalance -= transactionans.amount;
            console.log("your remaining balance is" + myBalance);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (operations.transaction === "check balance")
        console.log("your current balance is: " + myBalance);
    else if (operations.transaction === "fast cash") {
        let fastans = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "select your amount",
                choices: ["1000", "2000", "5000", "500"],
            }
        ]);
        if (fastans.amount === "1000") {
            myBalance -= fastans.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
        if (fastans.amount === "2000") {
            myBalance -= fastans.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
        if (fastans.amount === "5000") {
            myBalance -= fastans.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
        if (fastans.amount === "500") {
            myBalance -= fastans.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
}
else {
    console.log("invalid pincode");
}
;
