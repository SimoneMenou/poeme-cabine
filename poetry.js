// Basé sur code Guppy et fun programming
//Le piratage ne peut que tarir les imaginations et, pire, enterrer définitivement toute velléité de création.

//Identifier les balises html dans lesquels intégrer le texte
let a = document.getElementById("poem1");
let b = document.getElementById("poem2");
let c = document.getElementById("poem3");
let d = document.getElementById("poem4");
let e = document.getElementById("poem5");
let bouton = document.getElementById("btn");

//Peux etre améliorer : liste de mots avec le genre correspondant faire un JSON 
const intro = 
[
    {word: "paysage 🌇", masc: ["Le", "Mon", "Ton", "Notre", "Ce", "Chaque", "Un", "Seul le", "Son"]},
    {word:  "code",  masc: ["Le'", "Mon", "Ton", "Notre", "Ce", "Chaque", "Un", "Seul le", "Son"]},
    {word:  "pirate 🏴‍☠️",  masc: ["Le'", "Mon", "Ton", "Notre", "Ce", "Chaque", "Un", "Seul le", "Son"]},
    {word:  "bug",  masc: ["Le'", "Mon", "Ton", "Notre", "Ce", "Chaque", "Un", "Seul le", "Son"]},
    {word:  "ordinateur",  masc: ["L'", "Mon", "Ton", "Notre", "Cet", "Chaque", "Un", "Seul l'", "Son"]},
    {word:  "robot",  masc: ["Le", "Mon", "Ton", "Notre", "Ce", "Chaque", "Un", "Seul le", "Son"]},
    {word:  "cafard",  masc: ["Le", "Mon", "Ton", "Notre", "Ce", "Chaque", "Un", "Seul le", "Son"]},
    {word:  "souffle",  masc: ["Le", "Mon", "Ton", "Notre", "Ce", "Chaque", "Un", "Seul le", "Son"]},
    {word:   "chant",  masc: ["Le", "Mon", "Ton", "Notre", "Ce", "Chaque", "Seul le", "Son"]},
    {word:  "train de vie ",  masc: ["Le", "Mon", "Ton", "Notre", "Ce", "Chaque", "Un", "Seul le", "Son"]},
    {word:   "homme",  masc: ["L'", "Mon", "Ton", "Notre", "Cet", "Chaque", "Un", "Seul l'", "Son"]},
    {word: "algorythme",  masc: ["L'", "Mon", "Ton", "Notre", "Cet", "Chaque", "Un", "Seul l'", "Son"]},
    {word: "chien",  masc: ["Le", "Mon", "Ton", "Notre", "Ce", "Chaque", "Un", "Seul le", "Son"]},
    {word:  "clavier",  masc: ["Le", "Mon", "Ton", "Notre", "Ce", "Chaque", "Un", "Seul le", "Son"]},
    {word: "oiseau",  masc: ["L'", "Mon", "Ton", "Notre", "Cet", "Chaque", "Un", "Seul l'", "Son"]},
    {word:  "chateau",  masc: ["Le", "Mon", "Ton", "Notre", "Ce", "Chaque", "Un", "Seul le", "Son"]},
    {word:  "dictaphone",  masc: ["Le", "Mon", "Ton", "Notre", "Ce", "Chaque", "Un", "Seul le", "Son"]},
    {word: "route",  fem: ["La", "Ma", "Ta", "Notre", "Cette", "Chaque", "Une", "Seule la", "Sa"]},
    {word: "mer",  fem: ["La", "Ma", "Notre", "Cette", "Chaque", "Une", "Seule la", ]},
    {word: "Pluie",  fem: ["La", "Ma", "Ta", "Notre", "Cette", "Chaque", "Une", "Seule la", "Sa"]},
    {word: "Vague",  fem: ["La", "Ma", "Ta", "Notre", "Cette", "Chaque", "Une", "Seule la", "Sa"]},
    {word: "Source",  fem: ["La", "Ma", "Ta", "Notre", "Cette", "Chaque", "Une", "Seule la", "Sa"]},
    {word: "gloire",  fem: ["La", "Ma", "Ta", "Notre", "Cette", "Chaque", "Une", "Seule la", "Sa"]},
    {word: "verité",  fem: ["La", "Ma", "Ta", "Notre", "Cette", "Chaque", "Une", "Seule la", "Sa"]},
    {word: "Base",  fem: ["La", "Ma", "Ta", "Notre", "Cette", "Chaque", "Une", "Seule la", "Sa"]},
    {word: "vie",  fem: ["La", "Ma", "Ta", "Notre", "Cette", "Chaque", "Une", "Seule la", "Sa"]},
    {word: "situation",  fem: ["La", "Ma", "Ta", "Notre", "Cette", "Chaque", "Une", "Seule la", "Sa"]},

   

]

//Peux etre améliorer : liste des adjectifs avec le genre correspondant

const adj_masc
 =
 ["heureux", 
 "errant",
  "bleu", 
  "rapide", "exitant", "souriant", "incroyable", "surprenant", "delicat", 
"mysterieux", "clair", "mauve", "gigantesque", "fatiguant", "dure", "doux", "translucide", "long", "court", 
"agréable", "bruyant", "soupirant", "rare", "beau", "curieux", "grisant", "calamiteux", 
 "envieux", "groggy", "effrayant", "fin", "melodieux","brumeux","nebuleux","lumineux","eclatant"
]
const adj_fem
 =
 ["heureuse", 
 "errante",
  "bleue", 
  "rapide", "exitante", "souriante", "incroyable", "surprenante", "delicate", 
"mysterieuse", "claire", "mauve", "gigantesque", "fatigante", "dure", "douce", "translucide", "longue", "courte", 
"agréable", "bruyante", "soupirante", "rare", "belle", "curieuse", "grisante", "calamiteuse", 
 "envieuse", "groggy", "effrayante", "fine", "melodieuse","brumeuse","nebuleuse","lumineuse","eclatante"
]
//difficile à placer
const adv =
 ["au delà de", "devant", "sur", "derrière", "près de", "suivant", "interieurement", "à côté", 
"avec"
]
//Travailler la conjugaison
const verbe = 
["chante", "dansait", "tapait", "courait", "se meure", "demeurera", 
"vole", "bouge", "partira", "ne sera jamais", "toussote", "ricane","s'amuse","viendra",
 "craint", "travaille", "tourne","clignote", "voie","fonctionne" ," se programme"
];
const fin = 
[
    "🤷🏽‍♀️" ,"dans les limbes", "dans l'amour", "dans la joie", "dans l'espoir", "dans le malheur", "dans l'infini","dans linux","dans la vie","ici","😉","là bas",' pas loin',"demain","dans windows xp", 
    "avec internet explorer","en javascript", "en python","devant toi ","dans tes bras"
];

function ecrire() 
{
   // Générer un index aléatoire pour sélectionner un mot de la liste
    let index__intro = Math.floor(Math.random() * intro.length);
    let index_adj_masc = Math.floor(Math.random() * adj_masc.length);
    let index_adj_fem = Math.floor(Math.random() * adj_fem.length);
    let index_adv = Math.floor(Math.random() * adv.length);
    let index_verbe = Math.floor(Math.random() * verbe.length);
    let index_fin = Math.floor(Math.random() * fin.length);


    // Sélectionner un mot de depart aléatoire de la liste
    let word = intro[index__intro].word;
     //placemlent html
    c.innerText =verbe[index_verbe];
    d.innerText = fin[index_fin];
   

    // Gestion du genre pour la fonction aléatoire
    if (intro[index__intro].masc) {
        
        const randomMasc = intro[index__intro].masc[Math.floor(Math.random() * intro[index__intro].masc.length)];
          //verification
        console.log(`${randomMasc} ${word} ${adj_masc[index_adj_masc]} ${verbe[index_verbe]} ${fin[index_fin]} `);
        //placemlent html
        a.innerText = randomMasc + " " + word ;
        b.innerText =  adj_masc[index_adj_masc];
       
       

      } else if (intro[index__intro].fem) {
        const randomFem = intro[index__intro].fem[Math.floor(Math.random() * intro[index__intro].fem.length)];
        //verification 
        console.log(`${randomFem} ${word} ${adj_fem[index_adj_fem]} ${verbe[index_verbe]} ${fin[index_fin]}  `);
         //placemlent html
        a.innerText = randomFem + " " + word ;
        b.innerText =  adj_fem[index_adj_fem];
   
       
      }
}
// Lancer l'écriture à partir du bouton
bouton.onclick = ecrire;


