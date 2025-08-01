const express = require("express");
const router = express.Router();

const clientesRoutes = require("./clientesRoutes");
const ingresosRoutes = require("./ingresosRoutes");
const egresosRoutes = require("./egresosRoutes");
const serviceRoutes = require("./serviceRoutes");
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");
const authMiddleware = require("../middlewares/authMiddleware");

router.use("/clientes", authMiddleware, clientesRoutes);
router.use("/ingresos", authMiddleware, ingresosRoutes);
router.use("/egresos", authMiddleware, egresosRoutes);
router.use("/service", authMiddleware, serviceRoutes);
router.use("/user", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
