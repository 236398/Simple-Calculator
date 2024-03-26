#! /usr/bin/env node
import inquirer from  "inquirer";

const solution = await  inquirer.prompt([
    {message:"Enter your first number", type:"number", name:"first"},
    {message:"Enter your second number", type:"number", name:"second"},
    {message:"choose an option from below", type:"list", name:"options", choices:["Addition","Subtraction","Multiplication","Division"]},
    ]);

    //conditional statement
    if(solution.options === "Addition"){
        console.log(solution.first + solution.second)
    }
    else if(solution.options === "Subtraction"){
        console.log(solution.first - solution.second)
    }
    else if(solution.options === "Multiplication"){
        console.log(solution.first * solution.second)
    }
    else if(solution.options === "Division"){
        console.log(solution.first / solution.second)
    }
    else {
        console.log("Error")
    }
    
