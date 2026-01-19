const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

//REGISTER
const register = async (req, res) => {
  const { user, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { user, email } });
    if (existingUser)
      return res.status(400).json({
        message: "El usuario ya existe",
      });

    const hashedPassword = await bcrypt.hash(password, 10);
    const usuario = await User.create({
      user,
      email,
      password: hashedPassword,
      role: "user",
    });

    const token = jwt.sign({ userId: usuario.idUser }, process.env.JWT_SECRET, {
      expiresIn: "3h",
    });

    return res
      .status(201)
      .json({ message: "Usuario creado con exito", usuario: usuario, token });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error al registrar usuario", error: err.message });
  }
};

//LOGIN

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(401).json({ message: "Contraseña incorrecta" });

    const token = jwt.sign(
      { userId: user.idUser, role: user.role, user: user.user },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );
    return res.json({ message: "login exitoso", token });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error al iniciar sesión", error: err.message });
  }
};

module.exports = { register, login };
