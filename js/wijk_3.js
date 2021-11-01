const wijk3_foto = document.getElementById("wijk3_foto_js");
const wijk3_figcaption = document.getElementById("wijk3_figcaption_js");
var foto_nummer = 1;
const protest_audio = document.getElementById("protest_audio_js");

function slideshow(){
  setInterval(function(){
      switch (foto_nummer) {
        case 1:
          wijk3_foto.setAttribute("src", "img/demonstratie foto's/godsdienst_4.png");
          wijk3_figcaption.innerHTML = "God is speaking to you:";
          foto_nummer++;
          break;
        case 2:
          wijk3_foto.setAttribute("src", "img/demonstratie foto's/godsdienst_5.png");
          wijk3_figcaption.innerHTML = "South Africa";
          foto_nummer++;
          break;
        case 3:
          wijk3_foto.setAttribute("src", "img/demonstratie foto's/godsdienst_9.png");
          wijk3_figcaption.innerHTML = "Faith in god!";
          foto_nummer++;
          break;
        case 4:
          wijk3_foto.setAttribute("src", "img/demonstratie foto's/godsdienst_10.png");
          wijk3_figcaption.innerHTML = "Bring rain to the land!";
          foto_nummer++;
          break;
        case 5:
          wijk3_foto.setAttribute("src", "img/demonstratie foto's/godsdienst_11.png");
          wijk3_figcaption.innerHTML = "Plenty rain!";
          foto_nummer++;
          break;
        case 6:
          wijk3_foto.setAttribute("src", "img/demonstratie foto's/godsdienst_12.png");
          wijk3_figcaption.innerHTML = "I pray in the name of Jezus, Father!";
          foto_nummer++;
          break;
        case 7:
          wijk3_foto.setAttribute("src", "img/demonstratie foto's/godsdienst_1.png");
          wijk3_figcaption.innerHTML = "Come back to god!";
          foto_nummer++;
          break;
        case 8:
          wijk3_foto.setAttribute("src", "img/demonstratie foto's/godsdienst_3.png");
          wijk3_figcaption.innerHTML = "Come back to god!";
          foto_nummer++;
          break;
        case 9:
          wijk3_foto.setAttribute("src", "img/demonstratie foto's/godsdienst_6.png");
          wijk3_figcaption.innerHTML = "Come back to god!";
          foto_nummer++;
          break;
        case 10:
          wijk3_foto.setAttribute("src", "img/demonstratie foto's/godsdienst_7.png");
          wijk3_figcaption.innerHTML = "Come back to god!";
          foto_nummer++;
          break;
        case 11:
          wijk3_foto.setAttribute("src", "img/demonstratie foto's/godsdienst_8.png");
          wijk3_figcaption.innerHTML = "Come back to god!";
          foto_nummer++;
          break;
        case 12:
          wijk3_foto.setAttribute("src", "img/demonstratie foto's/godsdienst_2.png");
          wijk3_figcaption.innerHTML = "Come back to god!";
          foto_nummer = 1;
          break;
      }
    },9000);
  }

wijk3_foto.addEventListener("click", function(){
  protest_audio.play();
  slideshow();
})