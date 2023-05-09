let usrChoice = prompt("choos any of rock paper scissor").toLowerCase(); 

let  computeeSelection = function getComputerChoice() {
    switch (Math.floor(Math.random()*10))
    {   
        case 9:
        case 0:
        case 3:
        case 6:
        return "rock";
        break;
        case 1:
        case 4:
        case 7:
        return "paper";
        break;
        case 2:
        case 5:
        case 8:
        return "scissor";
    }
   
} 

console.log(getComputerChoice());a