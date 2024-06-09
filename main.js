// Demander à l'utilisateur de saisir deux nombres
var nombre1 = parseFloat(prompt("34 "));
var nombre2 = parseFloat(prompt("30 "));

// Calculer la somme des deux nombres
var somme = 34 + 30;

// Afficher la somme
alert("La somme de " + 34 + " et " + 30 + " est égale à " + somme);

// exo2
// Demander à l'utilisateur de saisir son âge
var age = parseInt(prompt("Quel est votre âge ?"));

// Vérifier l'âge et afficher un message selon que l'utilisateur est mineur, majeur, ou segnior
if (age < 18) {
    alert("Vous êtes mineur.");
} else if (age >= 18 && age < 60) {
    alert("Vous êtes majeur.");
} else {
    alert("Vous êtes senior.");
}

// exo3
// Demander à l'utilisateur de saisir un nombre
var nombre = parseInt(prompt(2));

// Vérifier si le nombre est pair ou impair 
if (nombre % 2 === 0) {
    document.write(nombre + " est un nombre pair.");
} else {
    document.write(nombre + " est un nombre impair.");
}

// exo4
// Demander à l'utilisateur de saisir un nombre
var nombre = parseInt(prompt("Entrez un nombre :"));

// Vérifier si le nombre est divisible par 3 ou non
if (nombre % 3 === 0) {
    document.write(nombre + " est divisible par 3.");
} else {
    document.write(nombre + " n'est pas divisible par 3.");
}
// exo5

// Demander à l'utilisateur de saisir une lettre
var lettre = prompt("Entrez une lettre :")

// Vérifier si la lettre est une voyelle ou une consonne et afficher un message approprié
// if (lettre.length === 1 && /[a-z]/.test(lettre)) { // Vérifier si la saisie est une seule lettre de l'alphabet
    if (/[aeiouy]/) {
        document.write(a + " est une voyelle.");
    } else {
        document.write(b + " est une consonne.");
    }
// } else {
//     document.write("Veuillez saisir une seule lettre de l'alphabet.");
// }

// exo6
// Demander à l'utilisateur de saisir un nombre
var nombre = parseFloat(prompt("Entrez un nombre :"));

// Vérifier si le nombre est positif,
if (nombre > 0) {
    alert(nombre + " est un nombre positif.");
} else if (nombre < 0) {
    alert(nombre + " est un nombre négatif.");
} else {
    alert(nombre + " est nul.");
}
// exo7
// Demander à l'utilisateur de saisir son prénom
var prenom = prompt("Entrez votre prénom :");

// Afficher un message de bienvenue personnalisé
alert("Bonjour, " + prenom + "! Bienvenue sur notre site.");
 
// exo8
// Demander à l'utilisateur de saisir son âge
var age = parseInt(prompt("Entrez votre âge :"));

// Demander à l'utilisateur de saisir le nombre de jours qu'il souhaite vivre
var joursAVivre = parseInt(prompt("Entrez le nombre de jours que vous souhaitez vivre :"));

// Calculer l'année où l'utilisateur aura atteint cet âge
var dateActuelle = new Date(9); // Obtenir la date actuelle
var anneeActuelle = dateActuelle.getFullYear(2024); // Obtenir l'année actuelle
var anneeFinale = anneeActuelle + Math.ceil(joursAVivre / 365);

// Afficher l'année où l'utilisateur aura atteint cet âge
alert("Vous aurez " + age + " ans en " + anneeFinale + ".");

// exo9
// Demander à l'utilisateur de saisir un nombre
var nombre = parseInt(prompt("Entrez un nombre :"));

// Vérifier si le nombre est valide
if (nombre < 0) {
    alert("Le nombre doit être un entier positif ou nul.");
} else {
    // Calculer la factorielle du nombre
    var factorielle = 1;
    for (var i = 1; i <= nombre; i++) {
        factorielle *= i;
    }

    // Afficher le résultat
    alert("La factorielle de " + nombre + " est " + factorielle + ".");
}
// exo10
// Demander à l'utilisateur de saisir deux nombres
var nombre1 = parseFloat(prompt("Entrez le premier nombre :"));
var nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));

// Comparer les deux nombres et afficher un message approprié
if (nombre1 > nombre2) {
    alert(nombre1 + " est plus grand que " + nombre2 + ".");
} else if (nombre1 < nombre2) {
    alert(nombre1 + " est plus petit que " + nombre2 + ".");
} else {
    alert(nombre1 + " est égal à " + nombre2 + ".");
}
// exo11
function sommeTableaux(tableau1, tableau2) {
    // Vérifier si les tableaux ont la même longueur
    if (tableau1.length !== tableau2.length) {
        throw "Les tableaux n'ont pas la même longueur.";
    }

    // Créer un nouveau tableau pour stocker la somme des éléments
    var resultat = [];

    // Parcourir les tableaux et calculer la somme des éléments correspondants
    for (var i = 0; i < tableau1.length; i++) {
        resultat.push(tableau1[i] + tableau2[i]);
    }

    // Renvoyer le tableau contenant la somme des éléments
    return resultat;
}

// Exemple d'utilisation de la fonction
var tableau1 = [1, 2, 3];
var tableau2 = [4, 5, 6];
var resultatSomme = sommeTableaux(tableau1, tableau2);
console.log(resultatSomme); // Affichera [5, 7, 9]

// exo12
function longueurDesChaines(tableauChaines) {
    // Créer un nouveau tableau pour stocker les longueurs des chaînes
    var longueurs = [];

    // Parcourir le tableau de chaînes et calculer la longueur de chaque chaîne
    for (var i = 0; i < tableauChaines.length; i++) {
        longueurs.push(tableauChaines[i].length);
    }

    // Renvoyer le tableau contenant les longueurs des chaînes
    return longueurs;
}

// Exemple d'utilisation de la fonction
var tableauChaines = ["Bonjour", "Monde", "JavaScript"];
var longueurs = longueurDesChaines(tableauChaines);
console.log(longueurs); // Affichera [7, 5, 10]

// exo13
function nombresPremiersInferieurs(nombre) {
    var nombresPremiers = [];

    // Vérifier chaque nombre inférieur à la limite
    for (var i = 2; i < nombre; i++) {
        var estPremier = true;

        // Vérifier si i est divisible par un nombre inférieur à lui-même
        for (var j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                estPremier = false;
                break;
            }
        }

        // Si i est premier, l'ajouter au tableau
        if (estPremier) {
            nombresPremiers.push(i);
        }
    }

    return nombresPremiers;
}

// Exemple d'utilisation de la fonction
var nombre = 20;
var premiersInferieurs = nombresPremiersInferieurs(nombre);
console.log(premiersInferieurs); // Affichera [2, 3, 5, 7, 11, 13, 17, 19]

// exo14
function carresDesNombres(tableau) {
    var carres = [];

    // Parcourir le tableau et calculer le carré de chaque nombre
    for (var i = 0; i < tableau.length; i++) {
        carres.push(tableau[i] * tableau[i]);
    }

    return carres;
}

// Exemple d'utilisation de la fonction
var tableau = [1, 2, 3, 4, 5];
var carres = carresDesNombres(tableau);
console.log(carres); // Affichera [1, 4, 9, 16, 25]
// exo15
// Parcourir les nombres de 0 à 20
for (var i = 0; i <= 20; i++) {
    // Vérifier si le nombre est pair
    if (i % 2 === 0) {
        console.log(i); // Afficher le nombre pair dans la console
    }
}
// exo16
// Supposons que vous ayez déjà un tableau de nombres appelé `tableau`
var tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Parcourir le tableau de nombres
for (var i = 0; i < tableau.length; i++) {
    // Vérifier si le nombre est impair
    if (tableau[i] % 2 !== 0) {
        console.log(tableau[i]); // Afficher le nombre impair dans la console
    }
}



