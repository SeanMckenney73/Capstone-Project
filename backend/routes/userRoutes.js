const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");


router.get('/', Controllers.userController.getUsers);

router.post('/create', Controllers.userController.createUser);

router.post('/login', Controllers.userController.loginUser);

router.put('/:id', Controllers.userController.updateUser);

router.delete('/:id', Controllers.userController.deleteUser);

module.exports = router;