function drag(evt) {
  evt.dataTransfer.setData("image", evt.target.id);
}

function drop(evt) {
  evt.preventDefault();
  var data = evt.dataTransfer.getData("image");
  var image = document.getElementById(data);
  evt.target.appendChild(image);
}

function allowDrop(evt) {
  evt.preventDefault();
}
