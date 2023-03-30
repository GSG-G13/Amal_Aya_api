/* eslint-disable import/no-unresolved */
const path = require('path');
const fetch = require('node-fetch');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const token = process.env.ACCSESS_TOKEN;
const handleHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
};

const searchName = (req, res) => {
  const { value } = req.params;
  const url = `https://superheroapi.com/api/${token}/search/${value}`;
  fetch(url)
    // eslint-disable-next-line no-shadow
    .then((res) => res.json())
    .then((data) => res.send(data.results));
};

const errorr = (req, res) => {
  res.sendFile(path.join(__dirname,'../../public/500.html'))
}
module.exports = { handleHomePage, searchName, errorr };
