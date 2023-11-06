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
            this.defense = _defense;
            this.existe = true;
        } else {
            this.nom = "error";
        }

        // underscore parametre

    }
    info(){
        console.log(this.nom + ": vie:" + this.life + "- attaque:" + this.attack + "-defense:" + this.defense );
    }
    attaquer(_defenseur) {
        console.log("attaque de" + this.nom + "sur" + _defenseur.nom)

        if (this.attaque > _defenseur.defense) {
            _defenseur.life -= 10

        }
        else if (this.attaque == _defenseur.defense) {

            _defenseur.life -= 5
        }
        else {
            this.life -= 5
        }

        if (this.life <= 0) {
            console.error(this.nom + "est mort")
            this.existe = false
        }

        else if (_defenseur.vie <= 0) {
            console.error(_defenseur.nom + "est mort")
            this.existe = false
        }
    }
}



// let perso1 = new character("Achab", genereChiffre(10,50), genereChiffre(10,50),genereChiffre(10,50));
// let perso2 = new character("Dazai Osamu", genereChiffre(10,50),genereChiffre(10,50),genereChiffre(10,50));

perso1.info()

perso2.info()

perso1.attaquer(perso2)

perso1.info()

perso2.info()

const nbrJoueur = 2

players = []

fot (let i = 0; i < nbrJoueur; i ++){
    const nom = prompt("Veuillez entrer un nom")
    const vie = genereChiffre(10,50)
    const attaque = genereChiffre(10,50)
    const def = genereChiffre(10,50)

    const player = new character (nom, vie, attaque, def)
    player.info()

    players.push(player)

}

function run(){

}