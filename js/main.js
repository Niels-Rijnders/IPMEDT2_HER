const button = document.getElementsByClassName("intro_Button");
//zorg dat de knop naar een andere pagina de class intro_Button
//heeft en zorg dat die een z index van 1 heeft
const overlay = document.getElementsByClassName("boddy_overlay")[0];
const wijk_button = document.getElementById("wijk_Button");
const wijk1_foto = document.getElementById("wijk1_foto_js");
const wijk2_foto = document.getElementById("wijk2_foto_js");
const wijk1_figcaption = document.getElementById("wijk1_figcaption_js");
const wijk2_figcaption = document.getElementById("wijk2_figcaption_js");
var foto_nummer = 1;


setTimeout(function(){
  overlay.style.height = "0%";
},750);

function writeText(txt) {
  var array = txt.split(','), a = array[0], b = array[1];
  document.getElementById("titel").innerHTML = a;
  document.getElementById("desc").innerHTML = b;
  switch (a){
    case "Wijk 1":
      wijk_button.setAttribute("onclick", "location.href='wijk_1.html';");
      wijk_button.innerHTML = "Bekijk de demonstratie";
      break;
    case "Wijk 2":
      wijk_button.setAttribute("onclick", "location.href='wijk_2.html';");
      wijk_button.innerHTML = "Ga op patrouille ";
      break;
    case "Wijk 3":
      wijk_button.setAttribute("onclick", "location.href='wijk_3.html';");
      wijk_button.innerHTML = "nog iets";
      break;
    default:
      wijk_button.setAttribute("onclick", "location.href='main.html';");
      break;
  }
}

for(let i = 0; i < button.length; i++){
  button[i].onclick = function (event){
    overlay.style.height = "100%";
    setTimeout(function(){
      window.location = "main.html";
    },750);
  };
}

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
  switch (foto_nummer) {
    case 1:
      wijk2_foto.setAttribute("src", "img/arrestatie foto's/Water_regels_2.png");
      wijk2_figcaption.innerHTML = "Where you are not allowed to use municipal drinking water";
      foto_nummer++;
      break;
    case 2:
      wijk2_foto.setAttribute("src", "img/arrestatie foto's/Water_regels_3.png");
      wijk2_figcaption.innerHTML = "For anything else except drinking";
      foto_nummer++;
      break;
    case 3:
      wijk2_foto.setAttribute("src", "img/arrestatie foto's/Water_regels_4.png");
      wijk2_figcaption.innerHTML = "You cannot wash your car, you cannot water your garden";
      foto_nummer = 1;
  }
},2000);
