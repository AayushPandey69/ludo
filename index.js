var array = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var randomNumber1 = array[Math.floor(Math.random()*6)];
document.querySelector(".img1").setAttribute("src", randomNumber1);

var randomNumber2 = array[Math.floor(Math.random()*6)];
document.querySelector(".img2").setAttribute("src", randomNumber2);

if(array.indexOf(randomNumber1) >  array.indexOf(randomNumber2)) {
 document.querySelector("h1").innerHTML = "🚩Player 1 won!"
    }
    else if(array.indexOf(randomNumber1) ===  array.indexOf(randomNumber2)) {
        document.querySelector("h1").innerHTML = "🟰Draw!"
    }
else{  document.querySelector("h1").innerHTML = "🚩Player 2 won!"}
