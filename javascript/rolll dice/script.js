const diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
let index = 0;

let userSelected = null;

function rolldice(){
    const intervalId = setInterval(() => {
        index =Math.floor(Math.random() *100)%6;
        document.getElementById("dice").src=diceImages[index];
    }, 10);

    setTimeout(()=>{
        clearInterval(intervalId);
        console.log(index);
    },2000)
}

function set(e,userIndex){
    userSelected = userIndex;
    console.log(e);
    
}

