const getTaille = ({ longueurDuSaut, nbVerrues }) => {
  // TODO
  return 0;
};

const getCouleurDesYeux = ({ couleur }) => {
  // TODO
  return "";
};

const getRoyaume = ({ haleine, coassement }) => {
  // TODO 
  return "";
};

const getEstCharmant = ({ estVivant, couleur }) => {
  // TODO
  return true;
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
