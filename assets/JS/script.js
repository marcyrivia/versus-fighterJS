let zumba


function genereChiffre(max, min) {
    return Math.floor(Math.round(max - min) * Math.random()+ min)
}



class character {
    constructor(_nom, _vie, _attaque, _defense) {

        this.existe = false;

        if (_nom != "" ) {
            this.nom = _nom;
            this.life=_vie;
            this.attack = _attaque;
            this.defenses = _defense;
            this.existe = true;
        } else {
            this.nom = "error";
        }

        // underscore parametre

    }
    info(){
        console.log(this.nom + ": vie:" + this.life + "- attaque:" + this.attack);
    }
}



let perso1 = new character("");
let perso2 = new character("Achab", genereChiffre(10,50), genereChiffre(10,50),genereChiffre(10,50));
let perso3 = new character("");
let perso4 = new character("Dazai Osamu", genereChiffre(10,50),genereChiffre(10,50),genereChiffre(10,50));

console.log(perso1.existe,perso1.nom);
console.log(perso3.existe,perso3.nom);
console.log(perso2);
console.log(perso4);
console.log("Nouveau personnage", perso4.nom);

perso2.info()
perso4.info()