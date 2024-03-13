let h1Element = document.createElement("h1");
h1Element.textContent = "webTechnologies";
let changeheading = document.createElement("button");
changeheading.textContent = "change heading";
let stylebutton = document.createElement("button");
stylebutton.textContent = "add styles";
let removestyles = document.createElement("button");
removestyles.textContent = "remove styles";
document.body.appendChild(h1Element);
document.body.appendChild(changeheading);
document.body.appendChild(stylebutton);
document.body.appendChild(removestyles);
changeheading.classList.add("button");
stylebutton.classList.add("button");
removestyles.classList.add("button");
changeheading.onclick = function(){
    h1Element.textContent = "sreenath reddy";
    changeheading.onclick = function () {
        h1Element.textContent = "webTechnologies";
    }
}


stylebutton.onclick = function(){
    h1Element.classList.add("heading");
}
removestyles.onclick = function(){
    h1Element.classList.remove("heading");
} 