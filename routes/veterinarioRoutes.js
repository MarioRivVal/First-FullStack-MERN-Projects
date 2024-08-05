import express from "express";
import {
  registrar,
  perfil,
  confirmar,
  autenticar,
  olvidePassword,
  comprobarToken,
  nuevoPassword,
} from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = express.Router();

// AREA PUBLICA
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.post("/olvide-password", olvidePassword);
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword);
// router.get("/olvide-password/:token", comprobarToken)
// router.post("/olvide-password/:token", nuevoPassword)

// AREA PRIVADA
router.get("/perfil", checkAuth, perfil);
export default router;
