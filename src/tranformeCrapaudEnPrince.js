const getTaille = ({ longueurDuSaut, nbVerrues }) => {
  return longueurDuSaut * nbVerrues + 1;
};

const getCouleurDesYeux = ({ couleur }) => {
  return couleur === "gris" ? "bleu" : couleur;
};

const getRoyaume = ({ haleine, coassement }) => {
  if (haleine === "neutre" && coassement === "aigue") {
    return "Saxe";
  }
  if (haleine === "putride" && coassement === "grave") {
    return "Bavière";
  }
  return "Lombard";
};

const getEstCharmant = ({ estVivant, couleur }) => {
  return estVivant && couleur !== "marron";
};

const tranformeCrapaudEnPrince = (crapaud) => {
  return {
    taille: getTaille(crapaud),
    couleurDesYeux: getCouleurDesYeux(crapaud),
    royaume: getRoyaume(crapaud),
    estCharmant: getEstCharmant(crapaud),
  };
};

module.exports = {
  tranformeCrapaudEnPrince,
  getCouleurDesYeux,
  getTaille,
  getRoyaume,
  getEstCharmant,
};
