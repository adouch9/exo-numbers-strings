let msg = (`Je suis le ténébreux, - le veuf, - l'inconsolé,
Le prince d'Aquitaine à la tour abolie :
Ma seule étoile est morte, - et mon luth constellé
Porte le soleil noir de la Mélancolie.

Dans la nuit du tombeau, toi qui m'as consolé,
Rends-moi le Pausilippe et la mer d'Italie,
La fleur qui plaisait tant à mon cœur désolé,
Et la treille où le pampre à la rose s'allie.

Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?
Mon front est rouge encor du baiser de la reine ;
J'ai rêvé dans la grotte où nage la sirène...

Et j'ai deux fois vainqueur traversé l'Achéron ;
Modulant tour à tour sur la lyre d'Orphée
Les soupirs de la sainte et les cris de la fée.`)

msg = msg.toLowerCase()

let count = 0
for (let i = 0; i < msg.length; i++)
  if (msg[i] === 'a' || msg[i] === 'à' || msg[i] === 'e' || msg[i] === 'ê' || msg[i] === 'è' || msg[i] === 'é' || msg[i] === 'i' || msg[i] === 'o' || msg[i] === 'u' || msg[i] === 'ù' || msg[i] === 'y')
    count++
console.log(`Il y a ${count} voyelles dans ce texte`)