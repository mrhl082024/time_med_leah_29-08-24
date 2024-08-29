//Hent url
import { url } from "./module.js";

//finn elementet i HTML dokumentet
const cont = document.querySelector("#ghib-cont");

//Send melding til server
const response = await fetch(url);
console.log(response);

//Sjekk at alt funker
async function checkapi(api) {
  try {
    CardCreators();
  } catch {
    throw new console.error(api.statusText);
  }
}

//koverter fra JSON til javascript
const data = await response.json();
console.log(data);

checkapi(response);

function CardCreators() {
  for (let i = 0; i < data.length; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const txt = document.createTextNode(data[i].description);
    p.append(txt);

    /**Legg et classname på div du lager
     * div.classlist = "Card";
     * ---leg til id på div du lager
     * div.id = "card";
     * ---legg til en egen id på hver div
     * div.id = `card${i}`;
     */
    img.src = `${data[i].image}`;

    //legg til img inni div
    div.appendChild(img);
    //legg til p under img inni div (posisjon i js er viktig)
    div.appendChild(p);
    //legg til img inni cont (som er nye navnet på #ghib-cont/main)
    cont.appendChild(div);
  }
}
//cont.innerHTML = `<div><p>hei</p></div>`;
