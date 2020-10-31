<?php 
/*
Commence par realiser un backend qui permet à partir d'une liste de votes de calculer
les differentes issues en utilisant plusieurs systemes d'aggregation de votes. 
Le backend devra donc proposer une API REST acceptant un fichiant decrivant tous
les votes (Par exempel au format JSON) et retournant les issues obtenues en employant
les differents systemes d'aggregation implantes. 
*/

/*
Description rapide des differents systemes de votes :
Vote par classement (Chaque votant, fais une liste du choix le plus apprecie a celui
qui est le moins apprecie) :

la methode Condorcet : 
Chaque électeur classe les candidats par ordre de préférence. 
On fait des simutation de l'ensemble des duels possibles, si un candidats remporte 
tous ses duels, c'est lui le vainqueur, sinon il faut utiliser une autre méthode pour 
résoudre les conflits.
Dans le cas ou tout se passe bien, pour comprendre on peut regarder l'exemple wikipedia 
https://blog.open-agora.com/fr/methode-condorcet/

Votants	   Premier	   Deuxième	    Troisième
35 votants	  A	           B	       C
25 votants	  B	           C	       A
15 votants	  C	           B	       A

35 votants préfèrent A > B contre 40 (25 + 15) B > A (B gagne contre A)
35 votants préfèrent A > C contre 40 (25 + 15) C > A (C gagne contre A)
60 (35 + 25) votants préfèrent B > C contre 15 C > B (B gagne contre C)

Si tout ne se passe pas bien,et qu'on ne trouve pas un seul gagnant, il y a un total de 7 techniques qui peuvent être 
utilisé pour trouver un gagnant

Vote par note (Chaque votant, donne une note a chacun des choix) :


*/
/*
["A","C","B"] => 2,
["B","A","C"] => 2,
["B","C","A"] => 2,
["C","A","B"] => 2,
["C","B","A"] => 2,
*/
// 
function condorcetMethod($array){
    return 3;
}

// Exemple d'informations transmis, ou il y aurai 3 choix A,B ou C.
// Pose probleme si 2 listes ont la même valeurs, 1 possibilitée faire des 
// sous listes pour un nombre donné, ce qui serai pratique, c'est que la liste 
// elle même soit la clé, pas sûr que cela existe en php.
$a = array(
    45 => ["A","B","C"],
);

print_r($a);

condorcetMethod($a);

?>