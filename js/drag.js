container1 = document.getElementById("container");
container2 = document.getElementById("container_2");
image1 = document.getElementById("image_drag");
image2 = document.getElementById("image_drag_2");
image3 = document.getElementById("image_drag_3");
image4 = document.getElementById("image_drag_4");
image5 = document.getElementById("image_drag_5");
goedTekst = document.getElementById("goed");
foutTekst = document.getElementById("fout");
introButton = document.getElementById("intro_Button");
var aantalgoed = 0;
var aantalfout = 0;
var huidigeimg = 0;

/*hier word gecheckt waar de images zijn geplaatst, staat image 1 in container 1 of 2
en elk van deze geeft een true of false statement dat gebruikt kan worden. */
var img1con1 = container1.querySelector("#image_drag") != null;
var img2con1 = container1.querySelector("#image_drag_2") != null;
var img3con1 = container1.querySelector("#image_drag_3") != null;
var img4con1 = container1.querySelector("#image_drag_4") != null;
var img5con1 = container1.querySelector("#image_drag_5") != null;
var img1con2 = container2.querySelector("#image_drag") != null;
var img2con2 = container2.querySelector("#image_drag_2") != null;
var img3con2 = container2.querySelector("#image_drag_3") != null;
var img4con2 = container2.querySelector("#image_drag_4") != null;
var img5con2 = container2.querySelector("#image_drag_5") != null;

/*hier word de image wegehaald van de originele plek */
function drag(evt) {
  evt.dataTransfer.setData("image", evt.target.id);
  evt.target.style.opacity = "0";
}

/*hier word de image in een van de containers geplaatst en de containers worden gecheckt */
function drop(evt) {
  evt.preventDefault();
  var data = evt.dataTransfer.getData("image");
  var image = document.getElementById(data);
  console.log(img1con1);
  image.style.width = "0rem";
  image.style.height = "0rem";
  evt.target.appendChild(image);
  checkimg();
  checkContainer();
  huidigeimg++;
  showButton();
}

/*hier word een check uitgevoerd welke statements true of false zijn */
function checkimg(){
  img1con1 = container1.querySelector("#image_drag") != null;
  img2con1 = container1.querySelector("#image_drag_2") != null;
  img3con1 = container1.querySelector("#image_drag_3") != null;
  img4con1 = container1.querySelector("#image_drag_4") != null;
  img5con1 = container1.querySelector("#image_drag_5") != null;
  img1con2 = container2.querySelector("#image_drag") != null;
  img2con2 = container2.querySelector("#image_drag_2") != null;
  img3con2 = container2.querySelector("#image_drag_3") != null;
  img4con2 = container2.querySelector("#image_drag_4") != null;
  img5con2 = container2.querySelector("#image_drag_5") != null;
}

/*hier word gecheckt of een image goed of fout is geplaatst en een score word toegevoegd. */
function checkContainer(){
  if (img1con1 == true || img2con1 == true || img3con1 == true) {
    container1.style.borderColor = "green";
    aantalgoed++;
    goedTekst.innerHTML = ("punten aantal goed is: " + aantalgoed);
    setTimeout(function(){container1.style.borderColor = "white";}, 2000);
  } if (img1con2 == true || img2con2 == true || img3con2 == true) {
    container2.style.borderColor = "red";
    aantalfout++;
    foutTekst.innerHTML = ("punten aantal fout is: " + aantalfout);
    setTimeout(function(){container2.style.borderColor = "white";}, 2000);
  } if (img4con1 == true || img5con1 == true) {
    container1.style.borderColor = "red";
    aantalfout++;
    foutTekst.innerHTML = ("punten aantal fout is: " + aantalfout);
    setTimeout(function(){container1.style.borderColor = "white";}, 2000);
  } if (img4con2 == true || img5con2 == true) {
    container2.style.borderColor = "green";
    aantalgoed++;
    goedTekst.innerHTML = ("punten aantal goed is: " + aantalgoed);
    setTimeout(function(){container2.style.borderColor = "white";}, 2000);
  }
}

function allowDrop(evt) {
  evt.preventDefault();
}

/*dit zijn de buttons op mobile waar je kan kieze welke image waar gaat. aan de hand van 
de variable huidigeimg die elke keer word opgetelt zodat we weten welke image boven ligt.
daarna word de bovenste image met deze buttons naar de containers verplaatst*/
function goedImage(){
  console.log(huidigeimg);
  switch (huidigeimg) {
    case 0:
      image1.style.opacity = "0";
      container1.appendChild(image1);
      checkimg();
      checkContainer();
      huidigeimg++;
      break;
    case 1:
      image2.style.opacity = "0";
      container1.appendChild(image2);
      checkimg();
      checkContainer();
      huidigeimg++;
      break;
    case 2:
      image3.style.opacity = "0";
      container1.appendChild(image3);
      checkimg();
      checkContainer();
      huidigeimg++;
      break;
    case 3:
      image4.style.opacity = "0";
      container1.appendChild(image4);
      checkimg();
      checkContainer();
      huidigeimg++;
      break;
    case 4:
      image5.style.opacity = "0";
      container1.appendChild(image5);
      checkimg();
      checkContainer();
      huidigeimg++;
      break;
  }
  showButton();
}

/*werkt hetzelfde als de vorige functie alleen dan voor de rechter button */
function foutImage(){
  console.log(huidigeimg);
  switch (huidigeimg) {
    case 0:
      image1.style.opacity = "0";
      container2.appendChild(image1);
      checkimg();
      checkContainer();
      huidigeimg++;
      break;
    case 1:
      image2.style.opacity = "0";
      container2.appendChild(image2);
      checkimg();
      checkContainer();
      huidigeimg++;
      break;
    case 2:
      image3.style.opacity = "0";
      container2.appendChild(image3);
      checkimg();
      checkContainer();
      huidigeimg++;
      break;
    case 3:
      image4.style.opacity = "0";
      container2.appendChild(image4);
      checkimg();
      checkContainer();
      huidigeimg++;
      break;
    case 4:
      image5.style.opacity = "0";
      container2.appendChild(image5);
      checkimg();
      checkContainer();
      huidigeimg++;
      break;
  }
  showButton();
}

/*na alle images verschijnt de button om weer terug naar de main pagina te gaan.*/
function showButton(){
  if (huidigeimg == 5) {
    introButton.classList.remove("hidden_Button");
  }
}