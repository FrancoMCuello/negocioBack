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

/* Service.hasOne(Ingresos, {
  foreignKey: "idservice",
  sourceKey: "idservice",
});

Service.belongsTo(Clientes, {
  foreignKey: "Clientes_idClientes",
  targetKey: "idClientes",
}); 

Clientes.hasMany(Service, {
  foreignKey: "Clientes_idClientes",
  sourceKey: "idClientes",
});
Service.belongsTo(User, {
  foreignKey: "User_idUser",
  targetKey: "idUser",
});

 User.hasMany(Service, {
  foreignKey: "User_idUser",
  sourceKey: "idUser",
}); */

// 🔹 Nueva relación: Ingresos <-> Clientes
Ingresos.belongsTo(Clientes, {
  foreignKey: "idClientes",
  targetKey: "idClientes",
});

Clientes.hasMany(Ingresos, {
  foreignKey: "idClientes",
  sourceKey: "idClientes",
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
