var btn = document.querySelector('#btn');
var quoteDiv = document.querySelector('#quote');

var quotes = [
    "«Agissez d'abord, expliquez plus tard.»",
    "«Le codage est un autre type de magie!»",
    "«Les vrais concepteurs Web écrivent du code. Ça l'a toujours été, ça le sera toujours.",
    "«Le code génétique est une écriture divine.»",
    "«Si vous contrôlez le code, vous contrôlez le monde. C'est l'avenir qui nous attend. »",
    "«À moins que vous ne connaissiez le code, il n'a aucun sens.»",
   "«Je m'en fiche» est le code pour «je m'en fiche». Mais nier le code est en fait un «code» pour «je ne veux pas être blessé». Et dans la vie, aucune quantité de «codage» n'empêchera cela de se produire. »",
   "«J'ai pris conscience avec force qu'une bonne partie du reste de ma vie allait être consacrée à trouver des erreurs dans mes propres programmes.»",
   "«Chaque objet est une information qui est toujours accompagnée d'une paire d'instructions intégrée.»",
   "«Personne ne peut comprendre ce qu'il ne peut pas interpréter; et personne ne peut interpréter ce qu'il ne peut pas percevoir.",
   "«Même le plus petit morceau de code, comme le Coronavirus (COVID-19), peut avoir un impact perturbateur majeur sur le système d'exploitation mondial, ce qui a été soudainement révélé au public au début de 2020.»",
   "Ce qui m'impressionne, c'est qu'un bug ... une erreur ... un problème ... ruine juste ma perfection.",
   "Donc, si vous voulez aller vite, si vous voulez faire vite, si vous voulez que votre code soit facile à écrire, rendez-le facile à lire.",
   "«Une lettre peut être codée et un mot peut être codé. Une représentation théâtrale peut être codée, et un sonnet peut être codé, et il y a des moments où il semble que le monde entier est dans le code. Certains pensent que le monde peut être décodé en effectuant des recherches dans une bibliothèque. D'autres pensent que le monde peut être décodé en lisant un journal. »",
 "«Peut-être que dans certains cas, les gens nous voient tomber et craquer, nous voient comme un échec. Nous devons vivre avec, je vis selon notre propre code, nous ne devrions pas avoir honte si nous tombons, car à chaque automne, nous nous levons et nous prenons une plus grande chance de gagner la prochaine fois parce que nous avons ",
 "«... Je ne dis pas qu'un code simple prend moins de temps à écrire. On pourrait penser que ce serait le cas puisque vous vous retrouvez avec moins de code total, mais une bonne solution n'est pas une accumulation de code, c'est une distillation de celui-ci.",
]

btn.addEventListener('click', function() {
    var RandomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quote.innerHTML = " '' " + RandomQuote + " '' ";
})