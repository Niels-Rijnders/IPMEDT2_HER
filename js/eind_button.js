const eind_button = document.getElementById("eind_button_js");
var klik_nummer = 0;

/*dit is de code voor de eindbutton op de main pagina die activeert na 3 keer klikken*/
eind_button.addEventListener("click", function(){
  if (klik_nummer <= 1) {
      console.log(klik_nummer);
      klik_nummer++;
  } else{
    eind_button.style.background = "#8AEB5A";
    eind_button.style.color = "black";
    window.location = "eind_pagina.html";
  }
});