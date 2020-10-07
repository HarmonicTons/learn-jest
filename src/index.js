const { fetchCrapaud } = require("./fetchCrapaud");
const { tranformeCrapaudEnPrince } = require("./tranformeCrapaudEnPrince");

const makeAPrince = async () => {
  const crapaud = await fetchCrapaud();
  const prince = tranformeCrapaudEnPrince(crapaud);
  // store prince
  return prince;
};

module.exports = { makeAPrince };
