function switchOff(){
    document.getElementById("bulb-image").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat-image").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";
    document.getElementById("onSwitch").style.backgroundColor = "rgb(26, 196, 26)";
    document.getAnimations("switchStatus").textContext = "Switch Off"
}
function switchOn(){
    document.getElementById("bulb-image").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat-image").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
    document.getElementById("offSwitch").style.backgroundColor = "#e12d39";
    document.getAnimations("switchStatus").textContext = "Switch On"
}