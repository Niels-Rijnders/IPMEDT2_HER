var button1 = document.querySelector('#toggler');
var button2 = document.querySelector('#toggler2');
var button3 = document.querySelector('#toggler3');

/*hier word de image gewisselt afhankelijk van de button*/
button1.onclick = function(){
 var img = document.querySelector('img');
 img.src = "img/auto_was_1.jpg";
};

button2.onclick = function(){
 var img = document.querySelector('img');
 img.src = "img/auto_was_2.jpg";
};

button3.onclick = function(){
 var img = document.querySelector('img');
 img.src = "img/auto_was_3.jpg";
};
