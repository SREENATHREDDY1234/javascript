let counter = document.getElementById("counterValue")
function increase(){
    let previousCounter = counter.textContent;
    let updatedCounter = parseInt(previousCounter) + 1;
    document.getElementById("counterValue").textContent=updatedCounter;
    if (updatedCounter > 0){
        document.getElementById("counterValue").style.color = "green"
    }
    else if(updatedCounter < 0){
        document.getElementById("counterValue").style.color = "red"
    }
    else{
        document.getElementById("counterValue").style.color = "black"
    }
}
function reset(){
    document.getElementById("counterValue").textContent="0";
    document.getElementById("counterValue").style.color = "black" 
}
function decrease(){
    let previousCounter = counter.textContent;
    let updatedCounter = parseInt(previousCounter) - 1;
    document.getElementById("counterValue").textContent=updatedCounter;
    if (updatedCounter > 0){
        document.getElementById("counterValue").style.color = "green"
    }
    else if(updatedCounter < 0){
        document.getElementById("counterValue").style.color = "red"
    }
    else{
        document.getElementById("counterValue").style.color = "black"
    }
}