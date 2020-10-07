# Learn Jest

Ce projet est un support de formation pour apprendre les bases des tests unitaires et de Jest.

L'exemple utilisé est une application qui transforme des crapauds en princes charmants.

### Workflow  
- récupère un crapaud à partir d'un webservice
- transforme le crapaud en prince selon les RGs définies plus bas
- stoque le prince en BDD

### Models
```ts
crapaud {
  couleur: "vert" | "marron" | "gris"
  nbVerrues: number
  haleine: "putride" | "neutre"
  coassement: "grave" | "aigue"
  estVivant: boolean
  longueurDuSaut: number
}

prince {
  taille: number
  couleurDesYeux: "vert" | "marron" | "bleu"
  royaume: "Saxe" | "Bavière" | "Lombard"
  estCharmant: boolean
}
```

### Règles de gestions
##### RG1 Yeux
- [RG1.1] prince.couleurDesYeux = crapaud.couleur;  
- [RG1.2] si couleur = "gris", couleurDesYeux = "bleu"

##### RG2 Taille
- [RG2.1] prince.taile = crapaud.longueurDuSaut * nbVerrues + 1

##### RG3 Royaume
- prince.royaume = 
  - [RG3.1] "Saxe" si haleine = neutre & coassement = "aigue"
  - [RG3.2] "Bavière" si haleine = putride & coassement = "grave"
  - [RG3.3] "Lombard" sinon

##### RG4 Charmant
- [RG4.1] prince.estCharmant = crapaud.estVivant & crapaud.couleur != "marron"