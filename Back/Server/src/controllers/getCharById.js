const axios = require("axios");

const successH = (response, res) => {
  const { id, name, gender, species, origin, status, image } = response.data;
  res.writeHead(200, { "Content-Type": "aplication/json" });
  res.end(JSON.stringify({ id, name, gender, species, origin, status, image }));
};

const errorH = (error, res) => {
  res.writeHead(500, { "Content-Type": "text-plain" });
  res.end(error.message);
};

const getCharById = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => successH(response, res))
    .catch((error) => errorH(error, res));
};

module.exports = getCharById;
