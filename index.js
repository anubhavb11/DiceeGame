// for 1st dice
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource= randomDiceImage;
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


// foe 2nd dice

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomImageSource2= randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

//if

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else{
  document.querySelector("h1").innerHTML="DRAW";
}
