const button = document.getElementsByClassName("intro_Button");
//zorg dat de knop naar een andere pagina de class intro_Button
//heeft en zorg dat die een z index van 1 heeft
const overlay = document.getElementsByClassName("boddy_overlay")[0];
const wijk_button = document.getElementById("wijk_Button");


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



