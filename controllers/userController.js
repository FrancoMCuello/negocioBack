const { User } = require("../models");

const userController = {
  // Crear un nuevo usuario
  async createUser(req, res) {
    try {
      const { email, password } = req.body;

      const nuevoUser = await User.create({
        email,
        password,
      });

      res.status(201).json({
        message: "Usuario creado correctamente",
        data: nuevoUser,
      });
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      res.status(500).json({ error: "Error al crear el usuario" });
    }
  },
  //Obetener todos los usuarios
  async getAllUser(req, res) {
    try {
      const usuarios = await User.findAll();
      res.status(200).json({
        message: "Usuarios encontrados",
        data: usuarios,
      });
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
      res.status(500).json({ error: "Error al obtener los usuarios" });
    }
  },
  //Obtener un usuario por ID
  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const usuario = await User.findByPk(id);

      if (!usuario) {
        return res.status(400).json({ error: "Usuario no encontrado" });
      }

      res.status(200).json({
        message: "Usuario encontrado correctamente",
        data: usuario,
      });
    } catch (error) {
      console.error("Error al obtener usuario:", error);
      res.status(500).json({ error: "Error al obtener el usuario" });
    }
  },
  //Modificar un usuario
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { user, email, password, role } = req.body;

      const usuario = await User.findByPk(id);
      if (!usuario) {
        return res.status(400).json({ error: "Usuario no encontrado" });
      }
      await usuario.update({
        user,
        email,
        password,
        role,
      });

      res.status(200).json(usuario);
    } catch (error) {
      console.error("error al actualizar el usuario:", error);
      res.status(500).json({ error: "Error al actualizar el usuario" });
    }
  },
  //eliminar User
  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const usuario = await User.findByPk(id);

      if (!usuario) {
        return res.status(400).json({ error: "Usuario no encontrado" });
      }
      await usuario.destroy();
      res.status(200).json({ mensaje: "Usuario eliminado correctamente" });
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
      res.status(500).json({ error: "Error al eliminar el usuario" });
    }
  },
};

module.exports = userController;
