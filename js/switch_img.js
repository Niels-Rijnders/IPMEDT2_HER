var button1 = document.querySelector('#toggler');
var button2 = document.querySelector('#toggler2');
var button3 = document.querySelector('#toggler3');

button1.onclick = function(){
 var img = document.querySelector('img');
 img.src = "img/auto_was_1.jpg"
}

button2.onclick = function(){
 var img = document.querySelector('img');
 img.src = "img/auto_was_2.jpg"
}

button3.onclick = function(){
 var img = document.querySelector('img');
 img.src = "img/auto_was_3.jpg"
}

setInterval(function(){
    var check = 0;
    if (check = 0) {
        check = 1;
    } if (check = 1) {
        window.location = "wijk_2_minigame.html";
    }
}, 20000);