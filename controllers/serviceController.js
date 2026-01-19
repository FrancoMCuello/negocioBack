const { Service } = require("../models");

const serviceController = {
  // Crear un nuevo servicio
  async createService(req, res) {
    try {
      const { service, description } = req.body;

      const nuevoService = await Service.create({
        service,
        description,
      });

      res.status(201).json({
        message: "Servicio creado correctamente",
        data: nuevoService,
      });
    } catch (error) {
      console.error("Error al crear el servicio:", error);
      res.status(500).json({ error: "Error al crear el servicio" });
    }
  },
  //Obetener todos los servicios
  async getAllServices(req, res) {
    try {
      const servicios = await Service.findAll();
      res.status(200).json({
        message: "Servicios encontrados",
        data: servicios,
      });
    } catch (error) {
      console.error("Error al obtener los servicios:", error);
      res.status(500).json({ error: "Error al obtener los servicios" });
    }
  },
  //Obtener un servicio por ID
  async getServiceById(req, res) {
    try {
      const { id } = req.params;
      const servicio = await Service.findByPk(id);

      if (!servicio) {
        return res.status(400).json({ error: "Servicio no encontrado" });
      }

      res.status(200).json({
        message: "Servicio encontrado correctamente",
        data: servicio,
      });
    } catch (error) {
      console.error("Error al obtener servicio:", error);
      res.status(500).json({ error: "Error al obtener el servicio" });
    }
  },
  //Modificar un servicio
  async updateService(req, res) {
    try {
      const { id } = req.params;
      const { service, description } = req.body;

      const servicio = await Service.findByPk(id);
      if (!servicio) {
        return res.status(400).json({ error: "Servicio no encontrado" });
      }
      await servicio.update({
        service,
        description,
      });

      res.status(200).json(servicio);
    } catch (error) {
      console.error("error al actualizar el servicio:", error);
      res.status(500).json({ error: "Error al actualizar el servicio" });
    }
  },
  //eliminar Service
  async deleteService(req, res) {
    try {
      const { id } = req.params;
      const servicio = await Service.findByPk(id);

      if (!servicio) {
        return res.status(400).json({ error: "Servicio no encontrado" });
      }
      await servicio.destroy();
      res.status(200).json({ mensaje: "Servicio eliminado correctamente" });
    } catch (error) {
      console.error("Error al eliminar el servicio:", error);
      res.status(500).json({ error: "Error al eliminar el servicio" });
    }
  },
};

module.exports = serviceController;
