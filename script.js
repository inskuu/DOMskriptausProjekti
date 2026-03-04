//Poimi elementit
const inputLaatikko = document.querySelector("#inputLaatikko");
const listanSisalto = document.querySelector("#listanSisalto");
const lisaaNappi = document.querySelector("#lisaaNappi");
const rivi = document.querySelector(".rivi")

//Lisää uusi <li> painamalla nappia
lisaaNappi.addEventListener("click" , lisaaHarjoitus);
function lisaaHarjoitus() {
    if (inputLaatikko.value === "") {
        naytaVirhe();
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = inputLaatikko.value;
    listanSisalto.appendChild(li);
    inputLaatikko.value = "";
    poistaVirhe();   
}

 //Lisää uusi <li> painamalla enteriä
inputLaatikko.addEventListener("keydown", painaEnter); 
function painaEnter(e) {
if (e.key === "Enter") {
    lisaaHarjoitus()
}
}

//Lisää virhe
function naytaVirhe() {
        inputLaatikko.placeholder = "Kirjoita harjoitus ennen lisäämistä."
        inputLaatikko.classList.add("virhe");
        rivi.classList.add('virhe');
    } 
//Poista virhe
    function poistaVirhe() {
        inputLaatikko.classList.remove("virhe");
        rivi.classList.remove('virhe');
}

inputLaatikko.addEventListener("input", function(e) {
    if (e.target.value.length > 0) {poistaVirhe();
}
});



//Merkitse valmiiksi tehdyt
listanSisalto.addEventListener("click", merkkaaValmiiksi);
function merkkaaValmiiksi(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("valittu");
    }
}

