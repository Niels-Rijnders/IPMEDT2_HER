const wijk1_foto = document.getElementById("wijk1_foto_js");
const wijk1_foto2 = document.getElementById("wijk1_foto2_js");
const wijk1_figcaption = document.getElementById("wijk1_figcaption_js");
const wijk1_figcaption2 = document.getElementById("wijk1_figcaption2_js");
var foto_nummer = 1;

/*
setInterval(function(){
  switch (foto_nummer) {
    case 1:
      wijk1_foto.setAttribute("src", "img/demonstratie foto's/protest_2.png");
      wijk1_figcaption.innerHTML = "Go to those overpriced hotels down the road!";
      foto_nummer++;
      break;
    case 2:
      wijk1_foto.setAttribute("src", "img/demonstratie foto's/protest_3.png");
      wijk1_figcaption.innerHTML = "You can run the bathwater until it floods, comrades!";
      foto_nummer++;
      break;
    case 3:
      wijk1_foto.setAttribute("src", "img/demonstratie foto's/protest_4.png");
      wijk1_figcaption.innerHTML = "They have no water crisis there!";
      foto_nummer++;
      break;
    case 4:
      wijk1_foto.setAttribute("src", "img/demonstratie foto's/protest_5.png");
      wijk1_figcaption.innerHTML = "But I bet you've got no water in your house!";
      foto_nummer++;
      break;
    case 5:
      //deze foto hoeft er misschien niet in
      wijk1_foto.setAttribute("src", "img/demonstratie foto's/protest_6.png");
      wijk1_figcaption.innerHTML = "";
      foto_nummer++;
      break;
    case 6:
      wijk1_foto.setAttribute("src", "img/demonstratie foto's/protest_1.png");
      wijk1_figcaption.innerHTML = "We have no fear of what we are doing!";
      foto_nummer = 1;
  }
  //deze moet langer als we de site gaan klaarmaken.
  //maybe knoppen toevoegen om door de foto's te scrollen
},2000);
*/

setInterval(function(){
  if (foto_nummer == 1){
    wijk1_foto.setAttribute("src", "img/demonstratie foto's/protest_3.png");
    wijk1_figcaption.innerHTML = "You can run the bathwater until it floods, comrades!";
    wijk1_foto2.setAttribute("src", "img/demonstratie foto's/protest_5.png");
    wijk1_figcaption2.innerHTML = "But I bet you've got no water in your house!";
    foto_nummer = 0;
  } else {
    wijk1_foto.setAttribute("src", "img/demonstratie foto's/protest_2.png");
    wijk1_figcaption.innerHTML = "Go to those overpriced hotels down the road!";
    wijk1_foto2.setAttribute("src", "img/demonstratie foto's/protest_4.png");
    wijk1_figcaption2.innerHTML = "They have no water crisis there!";
    foto_nummer = 1;
  }
},4000);