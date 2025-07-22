module.exports = (sequelize, DataTypes) => {
  const Ingresos = sequelize.define(
    "ingresos",
    {
      idIngresos: {
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
      User_idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "idUser",
        },
      },
      idservice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
          model: "service",
          key: "idservice",
        },
      },
    },
    {
      tableName: "ingresos",
      timestamps: false,
    }
  );
  return Ingresos;
};
