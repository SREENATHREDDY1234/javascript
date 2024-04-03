let buttonElement = document.getElementById("customButton");
let backgroundcolor = document.getElementById("bgColorInput");
let fontcolor = document.getElementById("fontColorInput");
let fontsize = document.getElementById("fontSizeInput");
let fontweight = document.getElementById("fontWeightInput");
let padd = document.getElementById("paddingInput");
let borderradius = document.getElementById("borderRadiusInput");

function applycss(){
    
    buttonElement.style.backgroundColor = backgroundcolor.value;
    buttonElement.style.color = fontcolor.value;
    buttonElement.style.fontSize = fontsize.value;
    buttonElement.style.fontWeight = fontweight.value;
    buttonElement.style.padding = padd.value;
    buttonElement.style.borderRadius = borderradius.value;
}