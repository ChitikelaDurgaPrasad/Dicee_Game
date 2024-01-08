function game(){
    let dicee1 = Math.floor((Math.random()*6)+1);
    let dicee1_image ="./images/dice"+dicee1+".png";
    let dicee2 = Math.floor((Math.random()*6)+1);
    var dicee2_image ="./images/dice"+dicee2+".png";
    if(dicee1 > dicee2){
        document.querySelector("h1").textContent = "player 1 wins!";  
        document.querySelectorAll("img")[0].setAttribute("src",dicee1_image);
        document.querySelectorAll("img")[1].setAttribute("src",dicee2_image);
    }
    else if (dicee1<dicee2){
        document.querySelector("h1").textContent = "player 2 wins!";
        document.querySelectorAll("img")[0].setAttribute("src",dicee1_image);
        document.querySelectorAll("img")[1].setAttribute("src",dicee2_image);
    }
    else {
        document.querySelector("h1").textContent = "Draw!";
        document.querySelectorAll("img")[0].setAttribute("src",dicee1_image);
        document.querySelectorAll("img")[1].setAttribute("src",dicee2_image);
    }
}