const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


router.get('/', (req, res) => {
Controllers.championController.getChampions(res);
})

router.get('/:id', (req, res)=> {
Controllers.championController.getChampionID(req, res)
})


module.exports = router;