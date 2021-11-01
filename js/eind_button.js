const eind_button = document.getElementById("eind_button_js");
var klik_nummer = 0;
eind_button.addEventListener("click", function(){
  console.log(klik_nummer);
  if (klik_nummer < 3) {
      console.log(klik_nummer);
      klik_nummer++;
  } else {
    eind_button.disabled = false;
  }
});