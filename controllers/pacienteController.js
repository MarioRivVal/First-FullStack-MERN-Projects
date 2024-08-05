import Paciente from "../models/Paciente.js";
// ----------------------------------
const agregarPaciente = async (req, res) => {
  res.json({ msg: "desde agregar paciente" });
};
// ----------------------------------
const obtenerPaciente = async (req, res) => {
  res.json({ msg: " desde obtener paciente" });
};

export { agregarPaciente, obtenerPaciente };
