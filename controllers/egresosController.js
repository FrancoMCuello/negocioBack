const { Egresos, User } = require("../models");

const egresoController = {
  // Crear un nuevo egreso
  async createEgreso(req, res) {
    try {
      const { concepto, monto, fecha, user_idUser } = req.body;

      const nuevoEgreso = await Egresos.create({
        concepto,
        monto,
        fecha,
        user_idUser,
      });

      res.status(201).json({
        message: "Egreso creado correctamente",
        data: nuevoEgreso,
      });
    } catch (error) {
      console.error("Error al crear el egreso:", error);
      res.status(500).json({ error: "Error al crear el egreso" });
    }
  },
  //Obetener todos los egresos
  async getAllEgresos(req, res) {
    try {
      const egresos = await Egresos.findAll({
        include: [
          {
            model: User,
            attributes: ["user"],
          },
        ],
      });
      res.status(200).json({
        message: "Egresos encontrados",
        data: egresos,
      });
    } catch (error) {
      console.error("Error al obtener los egresos:", error);
      res.status(500).json({ error: "Error al obtener los egresos" });
    }
  },
  //Obtener un egreso por ID
  async getEgresoById(req, res) {
    try {
      const { id } = req.params;
      const egreso = await Egresos.findByPk(id);

      if (!egreso) {
        return res.status(400).json({ error: "Egreso no encontrado" });
      }

      res.status(200).json({
        message: "Egreso encontrado correctamente",
        data: egreso,
      });
    } catch (error) {
      console.error("Error al obtener egreso:", error);
      res.status(500).json({ error: "Error al obtener el egreso" });
    }
  },
  //Modificar un egreso
  async updateEgreso(req, res) {
    try {
      const { id } = req.params;
      const { concepto, monto, fecha, user_idUser } = req.body;

      const egreso = await Egresos.findByPk(id);
      if (!egreso) {
        return res.status(400).json({ error: "Egreso no encontrado" });
      }
      await egreso.update({
        concepto,
        monto,
        fecha,
        user_idUser,
      });

      res.status(200).json(egreso);
    } catch (error) {
      console.error("error al actualizar el egreso:", error);
      res.status(500).json({ error: "Error al actualizar el egreso" });
    }
  },
  //eliminar Egreso
  async deleteEgreso(req, res) {
    try {
      const { id } = req.params;
      const egreso = await Egresos.findByPk(id);

      if (!egreso) {
        return res.status(400).json({ error: "Egreso no encontrado" });
      }
      await egreso.destroy();
      res.status(200).json({ mensaje: "Egreso eliminado correctamente" });
    } catch (error) {
      console.error("Error al eliminar el egreso:", error);
      res.status(500).json({ error: "Error al eliminar el egreso" });
    }
  },
};

module.exports = egresoController;
