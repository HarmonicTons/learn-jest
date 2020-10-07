const { fetchCrapaud } = require("./fetchCrapaud");
const { tranformeCrapaudEnPrince } = require("./tranformeCrapaudEnPrince");

const makeAPrince = async () => {
  // récupère un crapaud par un appel HTTP
  const crapaud = await fetchCrapaud();
  // transforme le crapaud avec la méthode locale
  const prince = tranformeCrapaudEnPrince(crapaud);
  // store prince
  return prince;
};

module.exports = { makeAPrince };
