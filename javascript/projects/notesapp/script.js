let notesContainer = document.querySelector(".notes-container");
let createBtn = document.querySelector(".btn");


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let image = document.createElement("img");
    inputBox.classList.add("input-box");
    inputBox.setAttribute("contenteditable", "true");
    image.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(image);
    updateStorage();
})

notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName === 'P'){
        let notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("Keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})