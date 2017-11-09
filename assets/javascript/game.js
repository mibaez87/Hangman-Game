var wordBank = ["white rabbit", "wonderland", "potion", "caterpillar", "tea party", "mad hatter"];

var random = Math.floor(Math.random() * wordBank.length);
var solution = wordBank[random];
var dashes = [];
var goodGuess = [];
var badGuess = [];
var wins = 0;
var remGuess = 7;
var space = solution.indexOf(" ") + 1;

function createDash() {
    for (var i = 0; i < solution.length; i++) {
        dashes.push("-");
        if (solution === " ") {
            dashes.push(" ");
        }
        console.log(solution)
    }
}
createDash();

document.onkeyup = function (event) {
    var userGuess = event.key;
    var rightGuess = false;

    for (var j = 0; j < solution.length; j++) {
        if (solution[j] === userGuess) {
            dashes.splice(j, 1, userGuess);
            dashes[solution.indexOf(userGuess)] = userGuess;
            goodGuess.push(userGuess);
            rightGuess = true;
            console.log(goodGuess)
            if (goodGuess.length === solution.length) {
                alert("You win!");
                wins++;
                if (!confirm("Play again?")) {
                    random = Math.floor(Math.random() * wordBank.length);
                    solution = wordBank[random];
                    goodGuess = [];
                    badGuess = [];
                    remGuess = 7;
                }
            }
        }
    }
    if (rightGuess === false) {
        badGuess.push(userGuess);
        console.log(badGuess)
        remGuess--;
    }

    if (remGuess === 0) {
        alert("You lose! Off with your head!");
        if (!confirm("Play again?")) {
            random = Math.floor(Math.random() * wordBank.length);
            solution = wordBank[random];
            goodGuess = [];
            badGuess = [];
            remGuess = 7;
        }
    }
    htmlDisplay(wins, remGuess, badGuess, dashes);
}

function htmlDisplay(wins, remGuess, badGuess, dashes) {
    var html =
        "<p id=p1>You've been spared by the Queen " + wins + " times!</p>" +
        "<br><p id=p2>Only " + remGuess + " guesses left before you lose your head...</p>" +
        "<br><p id=p3>You've Guessed: " + badGuess + "</p>" +
        "<br><p id=p4>" + dashes + "</p>";
    document.getElementById("game").innerHTML = html;
}