var random=Math.floor(Math.random()*6); 
var randomNumber1=random+1; //randomly generated dice input 
var randomImage="images/dice"+randomNumber1+".png" //allocated the image name in the correct image format
var player1=document.querySelectorAll("img")[0]; //targeting the first image by taking all the img tags into account 
player1.setAttribute("src",randomImage);
var randomforsec=Math.floor(Math.random()*6); 
var randomNumber2=randomforsec+1;
var randomImage2="images/dice"+randomNumber2+".png"
var player2=document.querySelectorAll("img")[1]; //targeting the second image by taking all the img tags into account 
player2.setAttribute("src",randomImage2);
