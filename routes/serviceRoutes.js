const express = require("express");
const router = express.Router();
const { serviceController } = require("../controllers");

//GET todos los servicios
router.get("/", serviceController.getAllServices);

//GET servicio por ID
router.get("/:id", serviceController.getServiceById);

//POST nuevo servicio
router.post("/", serviceController.createService);

//PUT actualizar servicio
router.put("/:id", serviceController.updateService);

//DELETE eliminar servicio
router.delete("/:id", serviceController.deleteService);

module.exports = router;
