const { Clientes, User } = require("../models");

const clientesController = {
  //crear cliente
  async createClientes(req, res) {
    try {
      const { nombre, apellido, user, phone, email, User_idUser } = req.body;

      const nuevoCliente = await Clientes.create({
        nombre,
        apellido,
        user,
        phone,
        email,
        User_idUser,
      });
      res.status(201).json({
        message: "Cliente creado correctamente",
        data: nuevoCliente,
      });
    } catch (error) {
      console.error("Error al crear el cliente:", error);
      res.status(500).json({ error: "Error al crear el cliente" });
    }
  },
  //Obtener todos los clientes
  async getAllClientes(req, res) {
    try {
      const clientes = await Clientes.findAll({
        include: [
          {
            model: User,
            attributes: ["user"],
          },
        ],
      });
      res.status(200).json({
        message: "Clientes encontrados",
        data: clientes,
      });
    } catch (error) {
      console.error("Error al obtener los clientes:", error);
      res.status(500).json({ error: "Error al obtener los clientes" });
    }
  },
  //Obtener un cliente por ID
  async getClienteById(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Clientes.findByPk(id);

      if (!cliente) {
        return res.status(400).json({ error: "Cliente no encontrado" });
      }

      res.status(200).json({
        message: "Cliente encontrado correctamente",
        data: cliente,
      });
    } catch (error) {
      console.error("Error al obtener cliente:", error);
      res.status(500).json({ error: "Error al obtener el cliente" });
    }
  },

  //modificar cliente
  async updateCliente(req, res) {
    try {
      const { id } = req.params;
      const { nombre, apellido, user, phone, email, User_idUser } = req.body;

      const cliente = await Clientes.findByPk(id);
      if (!cliente) {
        return res.status(400).json({ error: "Cliente no encontrado" });
      }
      await cliente.update({
        nombre,
        apellido,
        user,
        phone,
        email,
        User_idUser,
      });

      res.status(200).json(cliente);
    } catch (error) {
      console.error("error al actualizar el cliente:", error);
      res.status(500).json({ error: "Error al actualizar el cliente" });
    }
  },

  //eliminar cliente
  async deleteCliente(req, res) {
    try {
      const { id } = req.params;
      const cliente = await Clientes.findByPk(id);

      if (!cliente) {
        return res.status(400).json({ error: "Cliente no encontrado" });
      }
      await cliente.destroy();
      res.status(200).json({ mensaje: "Cliente eliminado correctamente" });
    } catch (error) {
      console.error("Error al eliminar el cliente:", error);
      res.status(500).json({ error: "Error al eliminar el cliente" });
    }
  },
};

module.exports = clientesController;
