
var level =1;
document.getElementById('level').innerHTML = "Level "+ level;

function timer(i) {
    var int = setInterval(function () {
        i--;
        document.getElementById("button").innerHTML = i;
        //maybe add a clearinterval here if counter =10;(all buttons clicked)
        if (i == 0) {
            clearInterval(int);
            document.getElementById("timer").innerHTML = "Better luck next year";
        }
    }, 1000);
}

var arena = document.getElementById('arena');
for (x = 1; x <= 10; x++) {
    var circle = document.createElement('div');
    var numCircle = document.createTextNode(x);
    circle.appendChild(numCircle);
    circle.className = 'circles';
    arena.appendChild(circle);
}

var circleList = document.querySelectorAll('.circles');

var counter = 1;
function clickCheck() {
    x = this.innerHTML;
    var count = parseInt(x);

    if (count == counter) {
        this.className += ' green';
        counter++;
        return;
    }
    else if (count != counter) {
        this.className += ' red';
        return;
    }
    if (counter == 10) {
        //run some sort of scoring,check function
        clearInterval(int);
    }
};
//maybe wrap this in a function, called level one, call when the button is pressed.
for (var x = 0; x <= circleList.length; x++) {
    var randNum = (Math.floor(Math.random() * 500)).toString();
    var randNumTwo = (Math.floor(Math.random() * 600)).toString();
    circleList[x].style.top = randNum + 'px';
    if (x <= 5) {
        circleList[x].style.left = randNumTwo + 'px';
    }
    else {
        circleList[x].style.right = randNumTwo + 'px';
    }
    circleList[x].onclick = clickCheck;
}
