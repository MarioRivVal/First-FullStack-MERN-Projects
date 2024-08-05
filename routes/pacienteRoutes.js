import express from "express";
import {
  agregarPaciente,
  obtenerPaciente,
} from "../controllers/pacienteController.js";

const router = express.Router();

router.route("/").post(agregarPaciente).get(obtenerPaciente);
export default router;
