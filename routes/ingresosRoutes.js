const express = require("express");
const router = express.Router();
const { ingresosController } = require("../controllers");

//GET todos los ingresos
router.get("/", ingresosController.getAllIngresos);

//GET ingreso por ID
router.get("/:id", ingresosController.getIngresoById);

//POST nuevo ingreso
router.post("/", ingresosController.createIngreso);

//PUT actualizar ingreso
router.put("/:id", ingresosController.updateIngreso);

//DELETE eliminar ingreso
router.delete("/:id", ingresosController.deleteIngreso);

module.exports = router;
