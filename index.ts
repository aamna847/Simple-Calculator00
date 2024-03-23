#! /usr/bin/env node


import inquirer from "inquirer"

//Printing a Welcome Message
console.log("\n\tWelcome To \'aamnarana\' - CLI Simple Calculator\n");

//Asking Questions from users through Inquirer

let answers =await inquirer.prompt([
    {message:"Enter first Number",type:"number",name:"FirstNumber"},
    {message:"Enter Second Number",type:"number",name:"SecondNumber"},
    {
        message:"Select one operator to perform operations",
        type: "list",
        name:"operator",
        choices:["Addition","Subtraction","Multiplication","Division"]
    },
])


//Conditional Statements IF-Else;

if(answers.operator === "Addition"){
    console.log(answers.FirstNumber + answers.SecondNumber )
}
else if(answers.operator === "Subtraction"){
    console.log(answers.FirstNumber - answers.SecondNumber)
}
else if(answers.operator === "Multiplication"){
console.log(answers.FirstNumber * answers.SecondNumber)
}
else if(answers.operator === "Division"){
    console.log(answers.FirstNumber / answers.SecondNumber)
}
else{
    console.log("Invalid Input")
}