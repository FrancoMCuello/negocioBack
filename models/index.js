const Sequelize = require("sequelize");
const sequelize = require("../config/db");
const UserModel = require("./User");
const ClientesModel = require("./Cliente");
const EgresosModel = require("./Egresos");
const IngresosModel = require("./Ingresos");
const ServiceModel = require("./Service");

const User = UserModel(sequelize, Sequelize.DataTypes);
const Clientes = ClientesModel(sequelize, Sequelize.DataTypes);
const Egresos = EgresosModel(sequelize, Sequelize.DataTypes);
const Ingresos = IngresosModel(sequelize, Sequelize.DataTypes);
const Service = ServiceModel(sequelize, Sequelize.DataTypes);

//Relaciones
User.hasMany(Clientes, {
  foreignKey: "User_idUser",
  sourceKey: "idUser",
});

Egresos.belongsTo(User, {
  foreignKey: "user_idUser",
  targetKey: "idUser",
});

Clientes.belongsTo(User, {
  foreignKey: "User_idUser",
  targetKey: "idUser",
});

Ingresos.belongsTo(User, {
  foreignKey: "User_idUser",
  targetKey: "idUser",
});

Ingresos.belongsTo(Service, {
  foreignKey: "idservice",
  targetKey: "idservice",
});

Service.hasOne(Ingresos, {
  foreignKey: "idservice",
  sourceKey: "idservice",
});

Service.belongsTo(Clientes, {
  foreignKey: "idclientes",
  targetKey: "idclientes",
});

Clientes.hasMany(Service, {
  foreignKey: "idclientes",
  sourceKey: "idclientes",
});

// Relación con User
Service.belongsTo(User, {
  foreignKey: "user_idUser",
  targetKey: "idUser",
});

User.hasMany(Service, {
  foreignKey: "user_idUser",
  sourceKey: "idUser",
});

module.exports = {
  sequelize,
  Sequelize,
  User,
  Clientes,
  Egresos,
  Ingresos,
  Service,
};
