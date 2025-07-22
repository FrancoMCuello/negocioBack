module.exports = (sequelize, DataTypes) => {
  const Egresos = sequelize.define(
    "egresos",
    {
      idEgresos: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      concepto: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      monto: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      user_idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "idUser",
        },
      },
    },
    {
      tableName: "egresos",
      timestamps: false,
    }
  );

  return Egresos;
};
