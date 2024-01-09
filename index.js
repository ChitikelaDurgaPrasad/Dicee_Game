// function game(){
//     let dicee1 = Math.floor((Math.random()*6)+1);
//     let dicee1_image ="./images/dice"+dicee1+".png";
//     let dicee2 = Math.floor((Math.random()*6)+1);
//     var dicee2_image ="./images/dice"+dicee2+".png";
//     document.querySelectorAll("img")[0].setAttribute("src",dicee1_image);
//     document.querySelectorAll("img")[1].setAttribute("src",dicee2_image);
//     if(dicee1 > dicee2){
//         document.querySelector("h1").textContent = "player 1 wins!";  
        
//     }
//     else if (dicee1<dicee2){
//         document.querySelector("h1").textContent = "player 2 wins!";
//     }
//     else {
//         document.querySelector("h1").textContent = "Draw!";
//     }
// }

// first dicee 

let dicee2=0, dicee1=0, to_load=0,count=0;
document.querySelector("button").addEventListener("click", first_dice);
function first_dice(){
    dicee1 = Math.floor((Math.random()*6)+1);
    let dicee1_image ="./images/dice"+dicee1+".png";
    document.querySelectorAll("img")[0].setAttribute("src",dicee1_image);
    count=count+dicee1;
    if(dicee1!==6){
        document.querySelectorAll("button")[0].classList.add("btn");
        dicee1=count;
        count=0;
        document.querySelectorAll("button")[1].addEventListener("click", second_dice);
    }
    if(dicee2!==0 && count===0){  //if(dicee2>=1 && dicee2s<=6);
        Game();
    }
}
function second_dice(){
    dicee2 = Math.floor((Math.random()*6)+1);
    let dicee2_image ="./images/dice"+dicee2+".png";
    document.querySelectorAll("img")[1].setAttribute("src",dicee2_image);
    count=count+dicee2;
    if(dicee2!==6){
        document.querySelectorAll("button")[1].classList.add("btn");
        dicee2=count;
        count=0;
    }
    if(dicee1!==0 && count===0){    //if(dicee1>=1 && dicee1<=6);
        Game();
    }
}
function Game(){
    if(dicee1 > dicee2){
        document.querySelector("h1").textContent = "player 1 wins!";
        to_load++;
    }
    else if (dicee1<dicee2){
        document.querySelector("h1").textContent = "player 2 wins!";
        to_load++;
    }
    else {
        document.querySelector("h1").textContent = "Draw!";
        to_load++;
    }
}

function load(){
    if(to_load===1){
        location.reload();
    }
}
