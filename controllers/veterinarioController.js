import Veterinario from "../models/Veterinario.js";

const registrar = async (req, res) => {
  try {
    const veterinario = new Veterinario(req.body);
    const veterinarioGuardado = await veterinario.save();
    res.json(veterinarioGuardado);
  } catch (error) {
    console.log(error);
  }
};

const perfil = (req, res) => {
  res.json({ msg: "mostrando perfil" });
};

export { registrar, perfil };
