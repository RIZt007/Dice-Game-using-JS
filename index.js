var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceimg = "dice"+randomNumber1+".png";
var randomImgSource = "images/" + randomDiceimg;
// var image1 = document.querySelectorAll("img")[0];
document.querySelectorAll("img")[0].setAttribute("src", randomImgSource)


var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randomImgSource2 = "images/"+randomDiceImg2;
document.querySelectorAll("img")[1].setAttribute("src" , randomImgSource2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!!🎆";
}else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!!🎉";
}else{
    document.querySelector("h1").innerHTML = "Draw 😒" 
}