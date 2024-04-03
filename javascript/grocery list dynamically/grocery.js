let bg_container = document.getElementById("background");
let container = document.createElement("div");
container.classList.add("bg-container");
bg_container.appendChild(container);

let heading = document.createElement("h1");
heading.classList.add("main-heading");
heading.textContent = "Grocery List";
container.appendChild(heading);

let list_container = document.createElement("div");
list_container.classList.add("list-container");
container.appendChild(list_container);

let ulist = document.createElement("ul");
list_container.appendChild(ulist);

let arr = ['milk', 'peanut butter', 'choco chips', 'tomato sauce', 'cup cake', 'noodles'];
for (let item of arr) {
    let listitem = document.createElement("li");
    listitem.textContent = item;
    ulist.appendChild(listitem);
}

let checkbox_container = document.createElement("div");
checkbox_container.classList.add("mt-3");
container.appendChild(checkbox_container);

let checkbox = document.createElement("input");
checkbox.classList.add("checkbox");
checkbox.type = 'checkbox';
checkbox.id = "homeDelivery";
checkbox_container.appendChild(checkbox);

let label = document.createElement('label');
label.classList.add("checkbox-label")
label.setAttribute('for', 'homeDelivery');
label.textContent = "Need Home Delivery";
checkbox_container.appendChild(label);

let button = document.createElement('button');
button.textContent = "Procced to pay";
button.classList.add("btn", "btn-primary","procced-btn");
container.appendChild(button);

console.log(container);