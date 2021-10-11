const button = document.getElementsByClassName("intro_Button");
//zorg dat de knop naar een andere pagina de class intro_Button 
//heeft en zorg dat die een z index van 1 heeft
const overlay = document.getElementsByClassName("boddy_overlay")[0];

setTimeout(function(){
  overlay.style.height = "0%"
},750)

for(let i = 0; i < button.length; i++){
  button[i].onclick = function (event){
    overlay.style.height = "100%"
    setTimeout(function(){
      window.location = "main.html";
    },750)
  }
}
