import express from "express";
const router = express.Router();
import {
  agregarPaciente,
  obtenerPacientes,
} from "../controllers/pacienteController.js";
import checkAuth from "../middleware/authMiddleware.js";

router.route("/").post(checkAuth, agregarPaciente).get(obtenerPacientes);
export default router;
