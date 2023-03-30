const express = require('express');

const { handleHomePage, searchName,errorr } = require('../controllers/superhero');
const{clientError, serverError} = require('../controllers/error')
const router = express.Router();

router.get('/', handleHomePage);

router.get('/search/:value', searchName);
router.get('/error', errorr 
);

router.use(clientError)
router.use(serverError)

module.exports = router;
