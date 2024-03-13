function appendValue(value){
    document.getElementById("inputElement").value += value;
}
function clearinput(){
    document.getElementById("inputElement").value="";
}
function deleteLastCharacter(){
    let inputElement = document.getElementById("inputElement");
    inputElement.value = inputElement.value.slice(0,-1); 
}
function calculate(){
    try{
        let result = eval(document.getElementById("inputElement").value);
        document.getElementById("inputElement").value = result;
    }
    catch (error){
        document.getElementById("inputElement").value = "Error";
    }
}