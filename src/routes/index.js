const express = require('express');

const { handleHomePage, searchName } = require('../controllers/superhero');

const router = express.Router();

router.get('/', handleHomePage);

router.get('/search/:value', searchName);

// // 404
// //500
// // router.use(clientError)
// // router.use(serverError)

module.exports = router;
