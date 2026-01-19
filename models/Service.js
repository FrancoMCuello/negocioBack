module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define(
    "service",
    {
      idservice: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      service: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      tableName: "service",
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Service;
};
