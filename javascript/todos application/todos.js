let todoitemscontainer = document.getElementById("todoItemsContainer");
let addbutton = document.getElementById("addbutton");
let savebutton = document.getElementById("savebutton");



let todolist =gettodolistfromlocalstorage();

savebutton.onclick = function () {
    localStorage.setItem("todolist", JSON.stringify(todolist));
}
function gettodolistfromlocalstorage(){
    let storagetodolist = JSON.parse(localStorage.getItem("todolist"));
    if(storagetodolist === null){
        return[];
    }
    else{
        return storagetodolist;
    }
}

let a = 1;




function strike(checkboxid, labelid,text) {
    let checkbox = document.getElementById(checkboxid);
    let labelContent = document.getElementById(labelid);
    // if (checkbox.checked) {
    //     labelContent.classList.add("checked");
    // }
    // else {
    //     labelContent.classList.remove("checked");
    // }
    labelContent.classList.toggle("checked");
    let indexno = todolist.findIndex(function(eachItem) {
        if (eachItem.text === text) {
            return true;
        }
        else {
            return false;
        }
    });
    

    let todoObject = todolist[indexno];

    if(todoObject.ischecked === true){
        todoObject.ischecked = false;
    }else{
        todoObject.ischecked = true;
    }
}


function deletechild(listid,text) {
    let list = document.getElementById(listid);
    todoitemscontainer.removeChild(list);
    let count = todolist.findIndex(function(eachItem){
        if(eachItem.text === text ){
            return true;
        }
        else{
            return false;
        }
    });
    todolist.splice(count,1);
}


function addtodoitem(todo){
    let idforeachlist = "list" + todo.count;
    let idforcheckbox = "checkboxInput" + todo.count;
    let idforlabel = "lable" + todo.count;

    let todoitem = document.createElement("li");
    todoitem.id = idforeachlist;
    todoitem.classList.add("todo-item-container","mt-3", "d-flex", "flex-row");

    todoitemscontainer.appendChild(todoitem);

    let checkBox = document.createElement("input");
    checkBox.classList.add("checkbox-input");
    checkBox.type = "checkbox";
    checkBox.id = idforcheckbox;
    checkBox.checked = todo.ischecked;
    checkBox.onclick = function(){
        strike(idforcheckbox,idforlabel,todo.text);
    }

    todoitem.appendChild(checkBox);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex");

    todoitem.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.classList.add("checkbox-label");
    labelElement.htmlFor = idforcheckbox;
    labelElement.id=idforlabel;
    labelElement.textContent = todo.text;
    if(todo.ischecked === true){
        labelElement.classList.add("checked");
    }

    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");

    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function(){
        deletechild(idforeachlist,todo.text);
    }
    deleteIconContainer.appendChild(deleteIcon);
    
}


for (let item of todolist) {
    addtodoitem(item);
}

function onaddtodo() {
    let todoinputElement = document.getElementById("todoUserInput");
    let todoinputElementValue = todoinputElement.value;
    if (todoinputElementValue === "") {
        alert("Enter valid input");
        return;
    }
    
    let inputvalue = {
        text: todoinputElementValue,
        count: a,
        ischecked :false,
    }
    a = a + 1;
    todolist.push(inputvalue);
    addtodoitem(inputvalue);
    todoinputElement.value = "";
}
addbutton.onclick = function() {
    onaddtodo();
}





