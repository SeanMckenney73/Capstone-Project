const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


router.get('/', (req, res) => {
Controllers.itemController.getItems(req, res);
})




module.exports = router;