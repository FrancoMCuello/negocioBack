module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define(
    "service",
    {
      idservice: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      service: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      Clientes_idClientes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "clientes",
          key: "idClientes",
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
      tableName: "service",
      timestamps: false,
    }
  );

  return Service;
};
