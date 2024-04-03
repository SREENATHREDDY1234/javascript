let about = document.getElementById("aboutTab");
let visit = document.getElementById("timeToVisitTab");
let attract = document.getElementById("attractionsTab");
let aboutbtn = document.getElementById("aboutButton");
let visitbtn = document.getElementById("timeToVisitButton");
let attractbtn = document.getElementById("attractionsButton");

visit.classList.add("d-none");
attract.classList.add('d-none');
function onClickAboutTab() {
    about.classList.remove('d-none');
    visit.classList.add('d-none');
    attract.classList.add('d-none');
    aboutbtn.classList.add('selected-button');
    visitbtn.classList.remove('selected-button');
    attractbtn.classList.remove('selected-button');
}
function onClickTimeToVisitTab() {
    about.classList.add('d-none')
    visit.classList.remove('d-none');
    attract.classList.add('d-none');
    aboutbtn.classList.remove('selected-button');
    visitbtn.classList.add('selected-button');
    attractbtn.classList.remove('selected-button');
}
function onClickAttractionsTab() {
    about.classList.add('d-none')
    visit.classList.add('d-none');
    attract.classList.remove('d-none');
    aboutbtn.classList.remove('selected-button');
    visitbtn.classList.remove('selected-button');
    attractbtn.classList.add('selected-button');
}