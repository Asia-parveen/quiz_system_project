#!usr/bin/env node

import inquirer from "inquirer";
console.log(`Welcome to my quiz game system`);
console.log(`you are required to win maximum 4 points`);

let points = 0;
//question1

let question1 = await inquirer.prompt([
  {
    name: "one",
    type: "list",
    message: "typescript is the superset of?",
    choices:   ["python", "javascript", "css", "c++"]
    
      }
    ])
  
if(question1.one == "javascript"){
  console.log("your answer is correct");
  points++
}else{
  console.log("Incorrect answer");
}
//question2

let question2 = await inquirer.prompt([
  {
    name: "two",
    type: "list",
    message: "who is the founder of microsoft?",
    
    choices:   ["elon","bill gates","mark","nasir"]
    
      }
    ])
  
if(question2.two =="bill gates"){
  console.log(`your answer is correct`);
  points++
}else{
  console.log(`Incorrect answer`)
}
// question3
let question3 = await inquirer.prompt([
  {
    name: "three",
    type: "list",
    message: "captial of pakistan?",
    
    choices:   ["karachi","islamabad","kpk","lahore"]
    
      }
    ])
  
if(question3.three =="islamabad"){
  console.log(`your answer is correct`);
  points++
}else{
  console.log(`Incorrect answer`)
}

// question4
let question4 = await inquirer.prompt([
  {
    name: "four",
    type: "list",
    message: "In tyscript, which symbol is commonly used to terminate a statement?",
    
    choices:   [ ".", ":", ",", ";" ]
     
  }
])
if(question4.four== ";" ){
  console.log(`your answer is correct`);
  points++
}else{
  console.log(`Incorrect answer`)
}
// questio5
let question5 = await inquirer.prompt([
  {
    name: "five",
    type: "list",
    message: "Wcich of the following characters is commonly allowed in typescript?",
    
    choices:   ["$", "@", "#", "a &"]
     
  }
])
if(question5.five=="$"){
  console.log(`your answer is correct`);
  points++
}else{
  console.log(`Incorrect answer`)
}
// output condition
if (points >= 4){
  console.log("congratulations");
  console.log(`your points: ${points}`)
}else{
  console.log("you loss! Try next time")
  console.log(`your points: ${points}`)
  
};

  

 
    
  

  


