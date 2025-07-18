const express = require("express");
const app = express();
const sequelize = require("./config/db");

app.use(express.json());

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
