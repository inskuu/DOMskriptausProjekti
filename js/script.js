//Poimi elementit
const inputHarjoitus = document.querySelector("#inputHarjoitus");
const inputMatka = document.querySelector("#inputMatka");
const lomake = document.querySelector("#harjoitusForm")
const postIt = document.querySelector("#postIt");  

//Satunnainen väri
const pastelliVarit = [
  "#fcedb0", // vaalea keltainen
  "#fccbdf", // vaalea pinkki
  "#c4ebf8", // hyvin vaalea turkoosi
  "#d3cffa", // laventeli
  "#d1fad5", // minttu
  "#fae4c7", // aprikoosi
  "#cddcf8"  // haalea sininen
];

function satunnainenVari() {
  const i = Math.floor(Math.random() * pastelliVarit.length);
  return pastelliVarit[i];
}

lomake.addEventListener("submit", function (e) {
  e.preventDefault();

const kuvaus = inputHarjoitus.value;
const km = inputMatka.value;

if (kuvaus === "") {
    naytaVirhe();
    return;
    }

if (km === "") {
    naytaVirhe();
    return;
}

//Luo uusi lappu
    const uusiLappu = document.createElement("div");
    uusiLappu.classList.add("lappu");
    uusiLappu.style.backgroundColor = satunnainenVari();

//Lisää teksti
const teksti = document.createElement("p");
    teksti.textContent = `${kuvaus} \n${km} km`;
    uusiLappu.appendChild(teksti);

//Yliviivaa tehdyt
uusiLappu.addEventListener("click", yliviivaaTehty)
function yliviivaaTehty() {
    teksti.classList.toggle("tehty");
}

//Lisää poista nappi 
    const poistaNappi = document.createElement("button");
    poistaNappi.classList.add("poistaNappi");
    poistaNappi.type = "button";
    poistaNappi.textContent = "Poista"; 
 poistaNappi.addEventListener("click", function(e) {
    e.stopPropagation();
    uusiLappu.remove();
  });
  uusiLappu.appendChild(poistaNappi);

postIt.appendChild(uusiLappu);

//Tyhjennä kentät
    inputHarjoitus.value = "";
    inputMatka.value = "";
    poistaVirhe();   
});
  
//Lisää virhe
function naytaVirhe() {
        inputHarjoitus.placeholder = "Kirjoita harjoitus ennen lisäämistä";
        inputHarjoitus.classList.add("virhe");
        inputMatka.placeholder = "Kirjoita kilometrit ennen lisäämistä";
        inputMatka.classList.add("virhe");        
}

//Poista virhe
    function poistaVirhe() {
        inputHarjoitus.classList.remove("virhe");
        inputMatka.classList.remove("virhe");
}

inputHarjoitus.addEventListener("input", function(e) {
    if (e.target.value.length > 0) {
        poistaVirhe();
    }
});










