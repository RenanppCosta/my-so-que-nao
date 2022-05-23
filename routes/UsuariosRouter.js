var express = require('express');
const { route } = require('.');
var router = express.Router();
const UsuariosController = require("../controllers/UsuariosController")

router.post("/", UsuariosController.registrar)
router.get("/", UsuariosController.buscar)

module.exports = router;
