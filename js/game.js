
var level = 1;
document.getElementById('level').innerHTML = "Level " + level;
var colorInterval;

var arena = document.getElementById('arena');
for (x = 1; x <= 10; x++) {
    var circle = document.createElement('div');
    var numCircle = document.createTextNode(x);
    circle.appendChild(numCircle);
    circle.className = 'circles';
    arena.appendChild(circle);
}

var circleList = document.querySelectorAll('.circles');

var int;
function timer(i) {
    for (var x = 0; x < circleList.length; x++) {
        circleList[x].onclick = clickCheck;
    }

    int = setInterval(function () {
        i--;
        document.getElementById("button").innerHTML = i;

        if (i == 0) {
            clearInterval(int);
            var lost = confirm("You lose, play again?");
            if (lost == true) {
                playAgain();
            }
            else {
                lost;
            }

        }
    }, 1000);
}
var counter = 1;
function clickCheck() {
    x = this.innerHTML;
    var count = parseInt(x);
    if (counter == 10) {
        this.className += ' green';
        clearInterval(int);
        alert("Congrats, You've passed this level");
        nextLevel();
    }
    else if (count == counter) {
        this.className += ' green';
        counter++;
        return;
    }
    else if (count != counter) {
        this.className += ' red';
        var lost = confirm("You lose, play again?");
        if (lost == true) {
            playAgain();
        }
        else {
            lost;
        }
        return;
    }
};
function removeInstructions() {
    var instructions = document.getElementById('instructions');
    instructions.parentNode.removeChild(instructions);
};
function originalCircles() {
    for (x = 0; x < circleList.length; x++) {
        circleList[x].className = 'circles';
        //circleList[x].style.color = "black";
        circleList[x].onclick = '';
        circleList[x].onmouseover = '';
    }
}
function playAgain() {
    counter = 1;
    clearInterval(int);
    clearInterval(colorInterval);
    clearInterval(randomInterval);
    originalCircles();
    var start = document.getElementById('button');
    start.innerHTML = '<p onclick="timer(25);levelOne();">Start</p>';
}
function nextLevel() {
    clearInterval(colorInterval);
    clearInterval(randomInterval);
    level++;
    document.getElementById('level').innerHTML = "Level " + level;
    counter = 1;
    originalCircles();
    var nextLevel;
    if (level == 2) { nextLevel = 'levelTwo()'; }
    else if (level == 3) { nextLevel = 'levelThree()'; }
    else if (level == 4) { nextLevel = 'levelFour()'; }
    else if (level == 5) { nextLevel = 'levelFive()'; }
    else if (level == 6) { nextLevel = 'levelSix()'; }
    else if (level == 7) { nextLevel = 'levelSeven()'; }
    else if (level == 8) { nextLevel = 'levelEight()'; }
    else if (level == 9) { nextLevel = 'levelNine()'; }
    else if (level == 10) { nextLevel = 'levelTen()'; }
    else if (level == 11) {
        alert("Congrats, you have done it!  Thank you for playing.")
    }
    var start = document.getElementById('button');
    start.innerHTML = '<p onclick="timer(25);' + nextLevel + ';">Start</p>';
}
function randomCircleLocations() {
    for (var x = 0; x < circleList.length; x++) {
        var randNum = (Math.floor(Math.random() * 500)).toString();
        var randNumTwo = (Math.floor(Math.random() * 600)).toString();
        circleList[x].style.top = randNum + 'px';
        if (x <= 5) {
            circleList[x].style.left = randNumTwo + 'px';
        }
        else {
            circleList[x].style.right = randNumTwo + 'px';
        }
    }
};
function levelOne() {
    level = 1;
    document.getElementById('level').innerHTML = "Level " + level;
    randomCircleLocations();
};
function levelTwo() {
    randomCircleLocations();
    for (var x = 0; x < circleList.length; x++) {
        circleList[x].style.color = "yellow";
    }


};
var newColor;
function colorChange() {

    for (var x = 0; x < circleList.length; x++) {
        var color = Math.floor(Math.random() * 999999).toString();
        newColor = '#' + color;
        circleList[x].style.color = newColor;
    }

}

function levelThree() {
    randomCircleLocations();
    colorInterval = setInterval(function () { colorChange() }, 1000);
    for (var x = 0; x < circleList.length; x++) {
        circleList[x].classList += ' levelThree';
    }
}
var randomInterval;
function levelFour() {
    clearInterval(colorInterval);
    for (var x = 0; x < circleList.length; x++) {
        circleList[x].classList += ' levelThree';
    }
    randomCircleLocations();
    randomInterval = setInterval(function () { randomCircleLocations() }, 2500);
}
function moveRight(x) {
    x.style.left = "80px";
}
function levelFive() {
    clearInterval(randomInterval);
    clearInterval(colorInterval);
    randomCircleLocations();
    for (var x = 0; x < circleList.length; x++) {
        circleList[x].classList += ' levelFive';
        circleList[x].style.color = 'peru';
        circleList[x].onmouseover = function () { moveRight(this) };

    }
}
function levelSix() {
    randomCircleLocations();
    for (var x = 0; x < circleList.length; x++) {
        circleList[x].style.left = "";
        if (x % 2 == 0) {
            colorInterval = setInterval(function () { colorChange() }, 1000);
            circleList[x].classList += ' levelThree';
        } else {
            circleList[x].onmouseover = function () { moveRight(this) };
            circleList[x].classList += ' levelFive';
            circleList[x].style.color = 'peru';

        }
    }
}
function levelSeven() {
    clearInterval(colorInterval);
    randomCircleLocations();
    for (var x = 0; x < circleList.length; x++) {
        if (x % 2 == 0) {
            circleList[x].classList += ' levelSeven';
            circleList[x].style.color = 'green';
        } else {
            circleList[x].onmouseover = function () { moveRight(this) };
            circleList[x].classList += ' levelFive';
            circleList[x].style.color = 'peru';

        }
    }
}
function levelEight() {
    for (var x = 0; x < circleList.length; x++) {
        if (x % 2 == 0) {
            circleList[x].classList += ' levelSeven';
            circleList[x].style.color = 'green';
        } else {
            circleList[x].classList += ' levelEight';
            circleList[x].style.color = 'purple';
        }
    }
}
function levelNine() {
    randomCircleLocations();
    for (var x = 0; x < circleList.length; x++) {
        circleList[x].classList += ' levelNine';
    }
    randomInterval = setInterval(function () { randomCircleLocations() }, 4000);
}
function levelTen() {
    for (var x = 0; x < circleList.length; x++) {
        if (x == 3) {
            circleList[x].classList += ' levelTen'
            circleList[x].style.color = 'red';
        }
        else if (x < 5) {
            randomCircleLocations();
            circleList[x].classList += ' lastLevel';
            circleList[x].style.color = 'yellow';
        }
        else {
            circleList[x].classList += ' lastLevelTwo';
        }
        randomInterval = setInterval(function () { randomCircleLocations() }, 4000);
    }
};