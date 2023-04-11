const express = require ('express');
const getCarousel = require('../controllers/carousel.js');

const router = express.Router();

router.get("/", getCarousel)

module.exports = router;