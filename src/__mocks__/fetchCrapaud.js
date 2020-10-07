const fetchCrapaud = jest.fn(async () => {
  return {
    couleur: "gris",
    nbVerrues: 2,
    haleine: "putride",
    coassement: "aigue",
    estVivant: true,
    longueurDuSaut: 0.2,
  };
});

module.exports = { fetchCrapaud };
