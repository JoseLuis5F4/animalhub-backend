const animal = require("./animal.model");

// Funciones CRUD

const createAnimal = async (req, res, next) => {
  try {
    const animal = await animal.create(req.body);
    res.json({
      status: 201,
      message: "Perfil del animal creado",
      data: animal,
    });
  } catch (error) {
    next(error);
  }
};

const getOneAnimal = async (req, res, next) => {
  try {
    const id = req.params.id;
    const animal = await animal.findById(id);
    res.json({
      status: 200,
      message: "Filtro por id",
      data: animal,
    });
  } catch (error) {
    next(error);
  }
};

const getOneByName = async (req, res, next) => {
  try {
    const name = req.params.name;
    const animal = await animal.findOne({ name: name });
    res.json({
      status: 200,
      message: "Filtro por nombre",
      data: animal,
    });
  } catch (error) {
    next(error);
  }
};

const getAllAnimals = async (req, res, next) => {
  try {
    const animal = await animal.find();
    res.json({
      status: 200,
      message: "Todos los animales",
      data: animal,
    });
  } catch (error) {
    next(error);
  }
};

const updateAnimal = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const animal = await animal.findByIdAndUpdate(id, body, {
      new: true,
    });
    res.json({
      status: 200,
      message: "Perfil del animal actualizado",
      data: animal,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAnimal = async (req, res, next) => {
  try {
    const id = req.params.id;
    const animal = await animal.findByIdAndDelete(id);
    res.json({
      status: 200,
      message: "Perfil del animal eliminado",
      data: animal,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAnimal,
  getOneAnimal,
  getOneByName,
  getAllAnimals,
  updateAnimal,
  deleteAnimal,
};
