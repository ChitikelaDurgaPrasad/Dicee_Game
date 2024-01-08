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

let dicee2=0, dicee1=0;
function first_dice(){
    dicee1 = Math.floor((Math.random()*6)+1);
    let dicee1_image ="./images/dice"+dicee1+".png";
    document.querySelectorAll("img")[0].setAttribute("src",dicee1_image);
    document.querySelectorAll("button")[0].classList.add("btn");
    if(dicee2!==0){  //if(dicee2>=1 && dicee2s<=6);
        Game();
    }
}
function second_dice(){
    dicee2 = Math.floor((Math.random()*6)+1);
    let dicee2_image ="./images/dice"+dicee2+".png";
    document.querySelectorAll("img")[1].setAttribute("src",dicee2_image);
    document.querySelectorAll("button")[1].classList.add("btn");
    if(dicee1!==0){    //if(dicee1>=1 && dicee1<=6);
        Game();
    }
}
function Game(){
    if(dicee1 > dicee2){
        document.querySelector("h1").textContent = "player 1 wins!";  
    }
    else if (dicee1<dicee2){
        document.querySelector("h1").textContent = "player 2 wins!";
    }
    else {
        document.querySelector("h1").textContent = "Draw!";
    }
}
