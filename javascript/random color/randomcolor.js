
let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let length = bgColorsArray.length

function changeColor() {
    let randomBgColorIndex = Math.ceil(Math.random() * 9)
    let randomBgColor = bgColorsArray[randomBgColorIndex];
    document.getElementById("bgContainer").style.backgroundColor = randomBgColor
}