//**ICI JE REUNIRAIS TOUTS MES MODULES */


//*ICI J'APPELLE LE FICHIER QUE JAI EXPORTER *//
// quand je l'es appeler on a mis "
//"./" c'est comme ca que je l'est appeleler */

import generateheure from "./generateheure.js";
import monHEURE from "./generateheure.js"
console.log("mon heure : " ,
    monHEURE
);

//**ici j'afdfiche mon heur grace   a la DOM */

const span = document.getElementById("heure");
span.textContent = generateheure.monHeure();

setInterval(() => {
    span.textContent = generateheure.monHeure();
},1000);