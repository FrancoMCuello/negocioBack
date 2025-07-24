const express = require("express");
const router = express.Router();

const clientesRoutes = require("./clientesRoutes");
const ingresosRoutes = require("./ingresosRoutes");
const egresosRoutes = require("./egresosRoutes");
const serviceRoutes = require("./serviceRoutes");
const userRoutes = require("./userRoutes");

router.use("/clientes", clientesRoutes);
router.use("/ingresos", ingresosRoutes);
router.use("/egresos", egresosRoutes);
router.use("/service", serviceRoutes);
router.use("/user", userRoutes);

module.exports = router;
