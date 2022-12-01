var randomnumber1 = Math.floor(Math.random()*6+1);
var name_dice1 = "images/dice" + randomnumber1 +".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src",name_dice1);

var randomnumber2 = Math.floor(Math.random()*6+1);
var name_dice2 = "images/dice" + randomnumber2 +".png"
var image2 = document.querySelectorAll("img")[1].setAttribute("src",name_dice2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="player1 wins";
}else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="player2 wins";
}else if(randomnumber1 === randomnumber2){
    document.querySelector("h1").innerHTML="DRAW!";
}

//image1.setAttribute("src",name_dice);