const axios = require("axios");

const fetchCrapaud = async () => {
  const res = await axios.get("https://crapaud-provider.com");
  return res.data;
};

module.exports = { fetchCrapaud };
