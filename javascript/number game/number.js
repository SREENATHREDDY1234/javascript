let number1 = Math.ceil((Math.random()) * 100);
let number2 = Math.ceil((Math.random()) * 100);
let firstnumber = document.getElementById("firstNumber");
let secondnumber = document.getElementById("secondNumber");
firstnumber.textContent = number1;
secondnumber.textContent = number2;
let inputnumber = document.getElementById("userInput");

let gameresult = document.getElementById("gameResult");
function check(){
    let inputvalue = parseInt(inputnumber.value);
    console.log(inputvalue);
    if((number1 + number2) === inputvalue){
        gameresult.textContent = "Congratulations! you got it right1";
        gameresult.style.backgroundColor = "#028a0f";
        gameresult.style.color = "white";
    }
    else{
        gameresult.textContent = "Please Try again";
        gameresult.style.backgroundColor = "#1e217c";
        gameresult.style.color = "white";
    }
}
function restart(){
    let number1 = Math.ceil((Math.random()) * 100);
    let number2 = Math.ceil((Math.random()) * 100);
    gameresult.textContent = "";
    let firstnumber = document.getElementById("firstNumber");
    let secondnumber = document.getElementById("secondNumber");
    firstnumber.textContent = number1;
    secondnumber.textContent = number2;
    let inputnumber = document.getElementById("userInput").value="";
}