const express = require("express");
const app = express();
const sequelize = require("./config/db");
const Cliente = require("./models/Cliente");
const routes = require("./routes");

app.use(express.json());

// Todas las rutas agrupadas
app.use("/api", routes);

//test DB Connection

sequelize
  .authenticate()
  .then(() => {
    console.log("conexion a la bd exitosa");
  })
  .catch((err) => {
    console.error("Error al conectar a la bd");
  });

app.get("/", (req, res) => {
  res.send("Servidor funcionando ...");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

sequelize
  .sync({ alter: true }) // o { force: true } para forzar recreación
  .then(() => console.log("Modelo Cliente sincronizado con la base de datos"))
  .catch((error) =>
    console.error("Error al sincronizar el modelo Cliente", error)
  );
