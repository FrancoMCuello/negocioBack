const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");

//GET todos los Usuarios
router.get("/", userController.getAllUser);

//GET usuario por ID
router.get("/:id", userController.getUserById);

//POST nuevo usuario
router.post("/", userController.createUser);

//PUT actualizar usuario
router.put("/:id", userController.updateUser);

//DELETE eliminar usuario
router.delete("/:id", userController.deleteUser);

module.exports = router;
