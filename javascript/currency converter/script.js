
const btn = document.querySelector('.btn');
const exchange_para = document.querySelector('.expara');
const dropdowns = document.querySelectorAll('.select');
let fromcurr = document.querySelector(".from select");
let tocurr = document.querySelector(".to select");

const updateFlag = (e)=>{
    let img = e.target.previousElementSibling;
    for  (code in countryList){
        if(code == e.target.value){
            img.src = `https://flagsapi.com/${countryList[code]}/flat/64.png`;
        }
    } 
}

for(let select of dropdowns){
    for(code in countryList){
        let option = document.createElement('option');
        option.value = code;
        option.innerHTML = code;
        select.appendChild(option);
        if(select.name === "from" && code === "USD"){
            option.selected = true;
        }
        if(select.name === "to" && code === "INR"){
            option.selected = true;
        }
    }
    select.addEventListener('change',updateFlag)
}

const update = async(value)=>{
    let from = fromcurr.value.toLowerCase();
    let to = tocurr.value.toLowerCase()
    const baseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"
    const URL = `${baseURL}/${from}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let tvalue = data[from][to];
    exchange_para.innerHTML = `${value} ${fromcurr.value} = ${(value*tvalue).toFixed(3)} ${tocurr.value}`
}

// let input = document.querySelector('.input');
// input.addEventListener('input', ()=>{
//     update(input.value);
// })

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    let input = document.querySelector('.input');
    let val = input.value;
    if(val == "" || val<0){
        val = 1;
        input.val = "1";
    }else{
        update(val);
    }
})

