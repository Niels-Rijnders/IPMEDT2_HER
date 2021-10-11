const cards = document.getElementsByClassName("intro_Button");
const overlay = document.getElementsByClassName("boddy_overlay")[0];

setTimeout(function(){
  overlay.style.height = "0%"
},750)

for(let i = 0; i < cards.length; i++){
  cards[i].onclick = function (event){
    overlay.style.height = "100%"
    setTimeout(function(){
      window.location = "main.html";
    },750)
  }
}
