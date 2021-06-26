

document.querySelector("button").addEventListener("click", function(){
    
var randomNumber1 = Math.round(Math.random() * 5) + 1;

var diceName = "dice" + randomNumber1 + ".png";

var allDiceName = "images/" + diceName;

var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src",allDiceName);

/////////////////////////////////////////////////////
var randomNumber2 = Math.floor(Math.random() * 5) + 1;

var diceName2 = "dice" + randomNumber2 + ".png";

var allDiceName2 = "images/" + diceName2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",allDiceName2);
/////////////////////////////////////////////////////
    if (randomNumber1<randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Özgürü sikiyor!"
    } else if (randomNumber1>randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Özgürü sikiyor!"
    } else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML ="Özgür Tost Oluyor!";
    }else{
    }
} )
 


 