const express = require("express");
const router = express.Router();
const { egresosController } = require("../controllers");

//GET todos los egresos
router.get("/", egresosController.getAllEgresos);

//GET egreso por ID
router.get("/:id", egresosController.getEgresoById);

//POST nuevo egreso
router.post("/", egresosController.createEgreso);

//PUT actualizar egreso
router.put("/:id", egresosController.updateEgreso);

//DELETE eliminar egreso
router.delete("/:id", egresosController.deleteEgreso);

module.exports = router;
