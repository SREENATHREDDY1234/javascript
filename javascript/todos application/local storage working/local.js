let textareaElement = document.getElementById("textcontent");
let buttonElement = document.getElementById("savebutton");

buttonElement.onclick = function(){
    let textareaContent = textareaElement.value;
    localStorage.setItem("textareaContent",textareaContent);
}

let localstoragecontent = localStorage.getItem("textareaContent");
if(localstoragecontent === null){
    textareaElement.value = "";
}
else{
    textareaElement.value = localstoragecontent;
}