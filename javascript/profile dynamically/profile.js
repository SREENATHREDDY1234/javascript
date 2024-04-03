let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "Sreenath",
    age: 18
};
let profileDetailsEL = document.getElementById("profileContainer");
let imageDetails = document.getElementById("imgContainer");
let imageEl = document.createElement("img")
imageEl.classList.add("image")
imageEl.setAttribute("Src", profileDetails.imgSrc)
imageDetails.appendChild(imageEl);


let head = document.createElement("h1");
head.textContent = profileDetails.name;
imageDetails.appendChild(head);
head.classList.add("head");

let para = document.createElement("p");
para.textContent = "Age : " + profileDetails.age
para.classList.add("para")
imageDetails.appendChild(para)