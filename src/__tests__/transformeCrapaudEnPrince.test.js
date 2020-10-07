const {
  tranformeCrapaudEnPrince,
  getCouleurDesYeux,
  getTaille,
  getRoyaume,
  getEstCharmant,
} = require("../tranformeCrapaudEnPrince");

describe("[RG1] couleur des yeux", () => {
  it("[RG1.1] le prince a les yeux de la couleur du crapaud si le crapaud n'est pas gris", () => {
    expect(getCouleurDesYeux({ couleur: "marron" })).toBe("marron");
  });

  it("[RG1.2] le prince a les yeux bleu si le crapaud était gris", () => {
    expect(getCouleurDesYeux({ couleur: "gris" })).toBe("bleu");
  });
});

describe("[RG2] taille", () => {
  it("[RG2.1] la taille du prince est définit à partir de la longueur du saut et du nombre de verrues", () => {
    expect(getTaille({ longueurDuSaut: 0.2, nbVerrues: 2.01 })).toBeCloseTo(
      1.402
    );
  });
});

describe("[RG3] royaume", () => {
  it("[RG3.1] Le Royaume est Saxe si l'haleine est neutre et le coassement aigue", () => {
    expect(getRoyaume({ haleine: "neutre", coassement: "aigue" })).toBe("Saxe");
  });
  it("[RG3.2] Le Royaume est Bavière si l'haleine est putride et le coassement grave", () => {
    expect(getRoyaume({ haleine: "putride", coassement: "grave" })).toBe(
      "Bavière"
    );
  });
  it("[RG3.3] Le Royaume est Lombard sinon", () => {
    expect(getRoyaume({ haleine: "putride", coassement: "aigue" })).toBe(
      "Lombard"
    );
  });
});

describe("[RG4] estCharmant", () => {
  it("[RG4.1] Le prince est charmant si le crapaud est vivant et pas marron", () => {
    expect(getEstCharmant({ estVivant: true, couleur: "marron" })).toBe(false);
    expect(getEstCharmant({ estVivant: true, couleur: "gris" })).toBe(true);
    expect(getEstCharmant({ estVivant: false, couleur: "gris" })).toBe(false);
  });
});

describe("transformeCrapaudEnPrince", () => {
  it("Le crapaud est transformé en prince", () => {
    expect(
      tranformeCrapaudEnPrince({
        couleur: "gris",
        nbVerrues: 2,
        haleine: "putride",
        coassement: "aigue",
        estVivant: true,
        longueurDuSaut: 0.2,
      })
    ).toEqual({
      taille: 1.4,
      couleurDesYeux: "bleu",
      royaume: "Lombard",
      estCharmant: true,
    });
  });
});
