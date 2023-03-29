const path = require('path');
const fetch = require('node-fetch');

const handleHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
};

const searchName = (req, res) => {
  const { value } = req.params;
  const url = `https://superheroapi.com/api/1937623966580952/search/${value}`;
  fetch(url)
    // eslint-disable-next-line no-shadow
    .then((res) => res.json())
    .then((data) => res.send(data.results));
};

module.exports = { handleHomePage, searchName };
