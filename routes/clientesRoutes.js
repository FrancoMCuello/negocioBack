const express = require("express");
const router = express.Router();
const { clientesController } = require("../controllers");

//GET todos los clientes
router.get("/", clientesController.getAllClientes);

//GET cliente por ID
router.get("/:id", clientesController.getClienteById);

//POST nuevo cliente
router.post("/", clientesController.createClientes);

//PUT actualizar cliente
router.put("/:id", clientesController.updateCliente);

//DELETE eliminar cliente
router.delete("/:id", clientesController.deleteCliente);

module.exports = router;
