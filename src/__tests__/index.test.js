const { makeAPrince } = require("../index");
const { fetchCrapaud } = require("../fetchCrapaud");

// active le mock "__mocks__/fetchCrapaud.js" si présent
// sinon transforme toutes les fonctions exportés dans fetchCrapaud.js en jest.fn()
jest.mock("../fetchCrapaud");

it("Récupère un crapaud et en fait un prince (global mock)", async () => {
  // si pas de "__mocks__/fetchCrapaud.js", on peut implémenter le mock ici:
  // fetchCrapaud.mockImplementation(async () => ({
  //   estVivant: true,
  // }));
  // dans makeAPrince fetchCrapaud sera mocké
  const prince = await makeAPrince();
  expect(prince).toEqual({
    taille: 1.4,
    couleurDesYeux: "bleu",
    royaume: "Lombard",
    estCharmant: true,
  });
  expect(fetchCrapaud.mock.calls.length).toBe(1);
});

it("Récupère un crapaud et en fait un prince (local mock)", async () => {
  // si on utilise le même mock il faut le reset entre chaque test
  // on peut mettre ça dans un 'beforeEach' pour éviter de le mettre dans chaque test
  fetchCrapaud.mockReset();
  // on peut remplacer le mock dynamiquement comme ceci: (qu'il y ai un "__mocks__/fetchCrapaud.js" ou pas!)
  fetchCrapaud.mockImplementation(async () => ({
    couleur: "gris",
    nbVerrues: 2,
    haleine: "neutre",
    coassement: "aigue",
    estVivant: false,
    longueurDuSaut: 0.2,
  }));
  const prince = await makeAPrince();
  expect(prince).toEqual({
    taille: 1.4,
    couleurDesYeux: "bleu",
    royaume: "Saxe",
    estCharmant: false,
  });
  expect(fetchCrapaud.mock.calls.length).toBe(1);
});
