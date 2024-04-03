let random_number = Math.ceil((Math.random()) * 100);
let user_input = document.getElementById("inputElement");
let game_result = document.getElementById("gameResult");
function check() {
    console.log(random_number)
    let user_input_value = parseInt(user_input.value);
    console.log(user_input_value)
    if (user_input_value === random_number) {
        game_result.textContent = "Congratulations! Your are correct";
        game_result.style.backgroundColor = "green"
    }
    else if (user_input_value > random_number) {
        game_result.textContent = "Your number is high! Try Again.";
        game_result.style.backgroundColor = "#1e217c"
    }
    else if (user_input_value < random_number) {
        game_result.textContent = "Your number is low ! Try Again";
        game_result.style.backgroundColor = "#1e217c"
    }
    else {
        game_result.textContent = "Invalid Input!";
        game_result.style.backgroundColor = "grey"
    }

}