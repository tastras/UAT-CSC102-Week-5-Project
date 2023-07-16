//animate the dice


var dice1 = 0,
var dice2 = 0,
var sum = 0,

function rollDice() {       
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    sum = dice1 + dice2;
    document.getElementById("dice1").src = "images/dice" + dice1 + ".png";
    document.getElementById("dice2").src = "images/dice" + dice2 + ".png";
    document.getElementById("sum").innerHTML = "Sum: " + sum;
    if (sum == 7 || sum == 11) {
        document.getElementById("result").innerHTML = "You LOSE";
    }else if (sum == 2 || sum == 3 || sum == 12) {
        document.getElementById("result").innerHTML = "You WIN!";   
    }else document.getElementById("result").innerHTML = "Roll Again!";

}