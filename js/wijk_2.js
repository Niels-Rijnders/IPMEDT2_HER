const wijk2_foto = document.getElementById("wijk2_foto_js");
const wijk2_figcaption = document.getElementById("wijk2_figcaption_js");
var foto_nummer = 1;

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