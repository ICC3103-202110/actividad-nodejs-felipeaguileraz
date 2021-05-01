var prompt = require("prompt-sync")(); /*you have to install prompt-sync before*/
                                        /*do npm install prompt-sync on terminal, to install*/
var number = prompt("Choose a number to do Fibonacci: ")

function fibonacci(number) {
    if (number < 2) {
        return number;
    }
    if (number >= 2){
        return fibonacci(number - 1) + fibonacci(number -2 );
    }
}

console.log(fibonacci(number));