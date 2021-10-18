const button = document.getElementsByClassName("intro_Button");
//zorg dat de knop naar een andere pagina de class intro_Button 
//heeft en zorg dat die een z index van 1 heeft
const overlay = document.getElementsByClassName("boddy_overlay")[0];
const wijk_button = document.getElementById("wijk_Button");
const wijk1_foto = document.getElementById("wijk1_foto_js");
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
      wijk_button.innerHTML = "nog iets";
      break;
    case "Wijk 2":
      wijk_button.setAttribute("onclick", "location.href='wijk_2.html';");
      wijk_button.innerHTML = "Ga op patrouille ";
      break;
    case "Wijk 3":
      wijk_button.setAttribute("onclick", "location.href='wijk_3.html';");
      wijk_button.innerHTML = "Bekijk de demonstratie";
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

//foto_nummer blijft op 1 staan en veranderd niet omdat hij in de default vast blijft zitten
setInterval(function(foto_nummer){
  console.log("functie werkt");
  switch(foto_nummer){
    case 1:
      console.log("swtich 1 werkt");
      wijk1_foto.setAttribute("src", "img/demonstratie foto's/protest_2.png");
      foto_nummer = 2;
      break;
    case 2:
      console.log("swtich 2werkt");
      wijk1_foto.setAttribute("src", "img/demonstratie foto's/protest_3.png");
      foto_nummer = 3;
      break;
    case 3:
      wijk1_foto.setAttribute("src", "img/demonstratie foto's/protest_4.png");
      foto_nummer = 4;
      break;
    case 4:
      wijk1_foto.setAttribute("src", "img/demonstratie foto's/protest_5.png");
      foto_nummer = 0;
      break;
    default:
      console.log("in default");
      wijk1_foto.setAttribute("src", "img/demonstratie foto's/protest_1.png");
      foto_nummer = 1;
      console.log(foto_nummer);
      break;
  }
},2000);