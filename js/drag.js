container1 = document.getElementById("container");
container2 = document.getElementById("container_2");
image1 = document.getElementById("image_drag");
image2 = document.getElementById("image_drag_2");
image3 = document.getElementById("image_drag_3");
goedTekst = document.getElementById("goed");
foutTekst = document.getElementById("fout");
var aantalgoed = 0;
var aantalfout = 0;

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




function drag(evt) {
  evt.dataTransfer.setData("image", evt.target.id);
  evt.target.style.opacity = "0";
}

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
  /*if (container1.hasChildNode(image1)) {
    container1.style.borderColor = "black";
  } else if (container1.hasChildNode(image2)) {
    container1.style.borderColor = "purple";
  }*/
}

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
