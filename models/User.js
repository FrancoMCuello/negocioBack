const { DataTypes } = require("sequelize");
const { toDefaultValue } = require("sequelize/lib/utils");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user: {
        type: DataTypes.STRING(45),
        unique: true,
      },
      email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        toDefaultValue: "user",
      },
    },
    {
      tableName: "user",
      timestamps: false,
    }
  );

  return User;
};
