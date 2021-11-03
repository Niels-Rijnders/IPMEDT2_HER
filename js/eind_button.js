const eind_button = document.getElementById("eind_button_js");
var klik_nummer = 0;

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