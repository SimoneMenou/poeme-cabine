// Basé sur code Guppy et fun programming
//Le piratage ne peut que tarir les imaginations et, pire, enterrer définitivement toute velléité de création.
const intro = ["Le", "Mon", "Ton", "Notre", "Ce", "Chaque", "Un", "Seul", "Son"];
const adj = ["heureux", "errant", "bleu", "rapide", "exitant", "souriant", "incroyable", "surprenant", "delicat", 
"mysterieux", "clair", "mauve", "gigantesque", "fatigant", "dure", "doux", "translucide", "long", "court", 
"agréable", "bruyant", "soupirant", "rare", "beau", "curieux", "grisant", "calamiteux", 
 "envieux", "groggy", "effrayant", "fin", "melodieux","brumeux","nebuleux"]
const wd  = ["paysage", "ordinateur","robot", "cafard", "souffle", "chant", "mont", "train", "ordinateur", "homme", "algorythme", "chien", 
"clavier", "ecran", "route", "oiseau", "chateau", "dictaphone", "espace "]
const adv = ["au delà de", "devant", "sur", "derrière", "près de", "suivant", "interieurement", "à côté", 
"avec"]
const verbe = 
["chante", "dansait", "tapait", "courait", "se meure", "demeurera", 
"vole", "bouge", "partira", "ne sera jamais"
];
const fin = 
[
    "dans les limbes", "dans l'amour", "dans la joie", "dans l'espoir", "dans le malheur", "dans l'infini","dans linux","dans la vie"
];



let bouton = document.getElementById("btn");
function ecrire() 
{
    let i = Math.floor(Math.random()*intro.length);
    let k = Math.floor(Math.random()*wd.length);
    let l = Math.floor(Math.random()*adj.length);
    let m = Math.floor(Math.random()* adv.length);
    let n = Math.floor(Math.random()* verbe.length);
    let q = Math.floor(Math.random()* fin.length);

    let a = document.getElementById("poem1");
    let b = document.getElementById("poem2");
    let c = document.getElementById("poem3");
    let d = document.getElementById("poem4");
    let e = document.getElementById("poem5");
    a.innerText = intro[i];
    b.innerText = wd[k];
    c.innerText = adj[l];
    d.innerText = verbe[n];
    e.innerText = fin[q];
    console.log(
    intro[i] +  " " + wd[k] + "  " + adj[l] + 
     " " +verbe[n] + " "+fin[q] + ".");
    
}
bouton.onclick = ecrire;

