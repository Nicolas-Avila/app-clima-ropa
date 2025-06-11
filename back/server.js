import express from "express";
import router from "./Routes/router.js";

const app = express();
const PORT = 3000;

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
