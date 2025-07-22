const { sequelize, User, Clientes } = require("./models");

async function testRelaciones() {
  try {
    //conectamos a la base de datos
    await sequelize.authenticate();
    console.log("se conecto la bd");

    //Sincroniza modelos sin borrar tablas (solo asegura estructuras)
    await sequelize.sync({ alter: true });

    //Creamos usuario
    const nuevoUsuario = await User.create({
      user: "fransasco",
      email: "frasanco@s.com",
      password: "re",
    });

    console.log("Usuario Creado:", nuevoUsuario.user);

    //Creamos clientes asociados a ese usuario
    const cliente1 = await Clientes.create({
      user: "Juancrack",
      nombre: "Juan",
      apellido: "Pérez",
      phone: "123456789",
      email: "Call@123.com",
      User_idUser: nuevoUsuario.idUser,
    });

    const cliente2 = await Clientes.create({
      user: "mariacrack",
      nombre: "Maria",
      apellido: "Gomez",
      phone: "213",
      email: "sergio@ga.com",
      User_idUser: nuevoUsuario.idUser,
    });

    console.log("Cliente creados con exito");

    //Obtener todos los clientes del ese usuario
    const clientesDelUsuario = await Clientes.findAll({
      where: { User_idUser: nuevoUsuario.idUser },
    });

    console.log(`Clientes de ${nuevoUsuario.user}:`);
    clientesDelUsuario.forEach((c) => {
      console.log(` - ${c.nombre} ${c.apellido}`);
    });
  } catch (error) {
    console.log("Error durante la prueba:", error.message);
  } finally {
    await sequelize.close();
    console.log("conexion cerrada");
  }
}

testRelaciones();
