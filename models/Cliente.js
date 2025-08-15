module.exports = (sequelize, DataTypes) => {
  const Clientes = sequelize.define(
    "clientes",
    {
      idClientes: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      user: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(45),
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      User_idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "idUser",
        },
      },
    },
    {
      tableName: "clientes", // nombre real en la base de datos
      timestamps: false, // si no estás usando createdAt y updatedAt
    }
  );

  return Clientes;
};
