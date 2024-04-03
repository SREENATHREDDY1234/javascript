let seconds = 1;
let minutes = 0;
let hours = 0;
let displaysecondsid = null;
let displayminutesid = null;
let displayhoursid = null;
let setbutton = document.getElementById("setbutton");
let clearbutton = document.getElementById("clearbutton");
let stopbutton = document.getElementById("stopbutton");
let minuteselement = document.getElementById("min");
let hourselement = document.getElementById("hour");
let secondselement = document.getElementById("sec");
function displayseconds() {
    secondselement.textContent = seconds;
    seconds = seconds + 1;
    if (seconds === 59) {
        seconds = 0;
    }

}

function displayminutes() {
    minuteselement.textContent = minutes;

    if (minutes === 59) {
        minutes = 0;
    }
    minutes = minutes + 1;
}
function displayhours() {
    hourselement.textContent = hours;
    hours = hours + 1;
}
setbutton.onclick = function () {
    displaysecondsid = setInterval(displayseconds, 1000);
    displayminutesid = setInterval(displayminutes, 30000);
    displayhoursid = setInterval(displayhours, 360000);
}
stopbutton.onclick = function () {
    clearInterval(displaysecondsid);
    clearInterval(displayminutesid);
    clearInterval(displayhoursid);
}
clearbutton.onclick = function () {
    clearInterval(displaysecondsid);
    clearInterval(displayminutesid);
    clearInterval(displayhoursid);
    secondselement.textContent = 0;
    minuteselement.textContent = 0;
    hourselement.textContent = 0;
    seconds = 1;
    minutes = 0;
    hours = 0;
}