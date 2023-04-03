const express = require ('express')
const getTeam = require ('../controllers/team.js');

const router = express.Router();

router.get("/", getTeam)

module.exports = router;