let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('.resetbtn');
let displayresult = document.querySelector(".displayresult");

let turnx = true; //playerX, playerO

let arrx = [];
let arro = [];

for(let i=0;i<10;i++){
    arro.push(false);
    arrx.push(false);
}

let ans = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

boxes.forEach((element,index)=>{
    element.addEventListener('click',(e)=>clickHandle(e,index+1));
})

function clickHandle(e,index){
    if(turnx){
        e.target.innerHTML = "X";
        turnx = !turnx;
        arrx[index] = true;
        checkMatch(arrx);
    }else{
        e.target.innerHTML = "O";
        turnx = !turnx;
        arro[index] = true;
        checkMatch(arro);
    }
    e.target.disabled = true;
}

function checkMatch(arr){
    for(let i=0;i<8;i++){
        let count = 0;
        for(let j=0;j<3;j++){
            if(arr[ans[i][j]]){
                count++;
            }
        }
        if(count === 3){
            boxes.forEach((element,index)=>{
                if(index+1 === ans[i][0] || index+1 === ans[i][1] || index+1 === ans[i][2]){
                    element.classList.add('green');
                }
            })
            if(turnx){
                displayresult.innerHTML = "O wins";
            }else{
                displayresult.innerHTML = "X wins";
            }
            buttontoggle(true);
            for(let i=0;i<10;i++){
                arro[i] = false;
                arrx[i] = false;
            }
        }
    }
}

resetbtn.addEventListener('click',resetHandle);
function resetHandle(){
    boxes.forEach((element,index)=>{
        element.classList.remove("green");
        element.innerHTML="";
    })
    turnx = true;
    buttontoggle(false);
    displayresult.innerHTML = "";
}

function buttontoggle(disabled){
    boxes.forEach((element)=>{
        element.disabled = disabled;    
    })  
}
