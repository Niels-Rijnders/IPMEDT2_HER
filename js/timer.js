var timeInSecs;
var ticker;

function startTimer(secs) {
timeInSecs = parseInt(secs);
ticker = setInterval("tick()", 1000);
}

function tick( ) {
var secs = timeInSecs;
if (secs > 0) {
timeInSecs--;
}
else {
clearInterval(ticker);
startTimer(20); // 4 minutes in seconds
}
var mins = Math.floor(secs/60);
secs %= 60;
var pretty = secs;

document.getElementById("countdown").innerHTML = pretty;
}

startTimer(20); // 4 minutes in seconds

setInterval(function(){
    var check = 0;
    if (check = 0) {
        check = 1;
    } if (check = 1) {
        window.location = "wijk_2_minigame.html";
    }
}, 21000);
