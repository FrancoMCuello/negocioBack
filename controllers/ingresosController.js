const { Ingresos, User, Service, Clientes } = require("../models");

const ingresoController = {
  // Crear un nuevo ingreso
  async createIngreso(req, res) {
    try {
      const { concepto, monto, fecha, User_idUser, idservice, idClientes } =
        req.body;

      const nuevoIngreso = await Ingresos.create({
        concepto,
        monto,
        fecha,
        User_idUser,
        idservice,
        idClientes,
      });

      res.status(201).json({
        message: "Ingreso creado correctamente",
        data: nuevoIngreso,
      });
    } catch (error) {
      console.error("Error al crear el ingreso:", error);
      res.status(500).json({ error: "Error al crear el ingreso" });
    }
  },
  //Obetener todos los ingresos
  async getAllIngresos(req, res) {
    try {
      const ingresos = await Ingresos.findAll({
        include: [
          {
            model: User,
            attributes: ["user"],
          },
          {
            model: Service,
            attributes: ["idservice", "service"],
          },
          {
            model: Clientes,
            attributes: ["idClientes", "nombre", "apellido", "user"],
          },
        ],
      });
      res.status(200).json({
        message: "Ingresos encontrados",
        data: ingresos,
      });
    } catch (error) {
      console.error("Error al obtener los ingresos:", error);
      res.status(500).json({ error: "Error al obtener los ingresos" });
    }
  },
  //Obtener un ingreso por ID
  async getIngresoById(req, res) {
    try {
      const { id } = req.params;
      const ingreso = await Ingresos.findByPk(id);

      if (!ingreso) {
        return res.status(400).json({ error: "Ingreso no encontrado" });
      }

      res.status(200).json({
        message: "Ingreso encontrado correctamente",
        data: ingreso,
      });
    } catch (error) {
      console.error("Error al obtener ingreso:", error);
      res.status(500).json({ error: "Error al obtener el ingreso" });
    }
  },
  //Modificar un ingreso
  async updateIngreso(req, res) {
    try {
      const { id } = req.params;
      const { concepto, monto, fecha, User_idUser, idservice, idClientes } =
        req.body;

      const ingreso = await Ingresos.findByPk(id);
      if (!ingreso) {
        return res.status(400).json({ error: "Ingreso no encontrado" });
      }
      await ingreso.update({
        concepto,
        monto,
        fecha,
        User_idUser,
        idservice,
        idClientes,
      });

      res.status(200).json(ingreso);
    } catch (error) {
      console.error("error al actualizar el ingreso:", error);
      res.status(500).json({ error: "Error al actualizar el ingreso" });
    }
  },
  //eliminar Ingreso
  async deleteIngreso(req, res) {
    try {
      const { id } = req.params;
      const ingreso = await Ingresos.findByPk(id);

      if (!ingreso) {
        return res.status(400).json({ error: "Ingreso no encontrado" });
      }
      await ingreso.destroy();
      res.status(200).json({ mensaje: "Ingreso eliminado correctamente" });
    } catch (error) {
      console.error("Error al eliminar el ingreso:", error);
      res.status(500).json({ error: "Error al eliminar el ingreso" });
    }
  },
};

module.exports = ingresoController;
