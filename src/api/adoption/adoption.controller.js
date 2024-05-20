// const { getOneByName } = require("../animal/animal.controller");
const Adoption = require("./adoption.model");

const createAdoption = async (req, res, next) => {
  try {
    const newAdoption = await Adoption.create(req.body);
    res.status(201).json({
      message: "Iniciado Proceso de Adopción",
      data: newAdoption,
    });
  } catch (error) {
    next(error);
  }
};

const getOneAdoption = async (req, res, next) => {
  try {
    const id = req.params.id;
    const adoption = await Adoption.findById(id).populate("animal_id", "name");
    res.json({
      message: "Filtrado por id",
      data: adoption,
    });
  } catch (error) {
    next(error);
  }
};

// const getOneByNameAdoption = async (req, res, next) => {
//   try {
//     const name = req.params.name;
//     const adoption = await Adoption.findOne({ animal_name: name });
//     res.json({
//       message: "Filtrado por nombre",
//       data: adoption,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

const getAllAdoptions = async (req, res, next) => {
  try {
    const adoptions = await Adoption.find().populate("animal_id", "");
    res.json({
      message: "Búsqueda de todos los animales en adopción",
      data: adoptions,
    });
  } catch (error) {
    next(error);
  }
};

const updateAdoption = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateAdoption = await Adoption.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({
      message: `Nuevo trámite de adopción`,
      data: updateAdoption,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAdoption = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteAdoption = await Adoption.findByIdAndDelete(id);
    res.json({
      message: "Trámite de adopción eliminado",
      data: deleteAdoption,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAdoption,
  getOneAdoption,
  // getOneByNameAdoption,
  getAllAdoptions,
  updateAdoption,
  deleteAdoption,
};
