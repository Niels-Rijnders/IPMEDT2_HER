const wijk1_foto = document.getElementById("wijk1_foto_js");
const wijk1_foto2 = document.getElementById("wijk1_foto2_js");
const wijk1_figcaption = document.getElementById("wijk1_figcaption_js");
const wijk1_figcaption2 = document.getElementById("wijk1_figcaption2_js");
var foto_nummer = 1;

/*hier worden de twee fotos gewisselt samen met de tekst eronder*/
setInterval(function(){
  if (foto_nummer == 1){
    wijk1_foto.setAttribute("src", "img/demonstratie_foto's/protest_3.png");
    wijk1_figcaption.innerHTML = "You can run the bathwater until it floods, comrades!";
    wijk1_foto2.setAttribute("src", "img/demonstratie_foto's/protest_5.png");
    wijk1_figcaption2.innerHTML = "But I bet you've got no water in your house!";
    foto_nummer = 0;
  } else {
    wijk1_foto.setAttribute("src", "img/demonstratie_foto's/protest_2.png");
    wijk1_figcaption.innerHTML = "Go to those overpriced hotels down the road!";
    wijk1_foto2.setAttribute("src", "img/demonstratie_foto's/protest_4.png");
    wijk1_figcaption2.innerHTML = "They have no water crisis there!";
    foto_nummer = 1;
  }
},4000);

/*hier word de breedte van de afbeelding aangepast afhankelijk van waar de slider is.*/
slider.addEventListener('change', image_slide);

function image_slide(e){
  const sliderPos = e.target.value;
  console.log(sliderPos);
  foreground_img.style.width = sliderPos + "%";
}