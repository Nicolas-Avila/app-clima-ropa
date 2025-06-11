import express from "express";
import cors from "cors";
import { clothingTemperature } from "../api/IAmodel.js";

const router = express.Router();
router.use(cors());
router.use(express.json());

router.get("/ropa", async (req, res) => {
  try {
    const respuesta = await clothingTemperature();
    res.json({ resultado: respuesta });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al procesar la solicitud de IA" });
  }
});

export default router;
