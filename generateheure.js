//**
// ** ICI JE Déclare la fonction qui renvoie l'heure *
// /
function monHeure (){
    let date = new date();
    let heure = date.getHours();
    console.log("coucou je passe a la télé à ",heure);
    return heure;
}
//**
//  */ JE VAIS EXPORTER OU EXPOSER LA FONCTION monHEURE PARCE QUE JE VEUX LA FONCTION DEPUIS UN AUTREFICHIER

export default{
    monHeure
}

console.log("main - mon heure",monHeure);
