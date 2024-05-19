const Animal = require("./animal.model");

const createAnimal = async (req, res, next) => {
  try {
    const newAnimal = await Animal.create(req.body);
    res.status(201).json({
      message: "Perfil del animal creado",
      data: newAnimal,
    });
  } catch (error) {
    next(error);
  }
};

const getOneAnimal = async (req, res, next) => {
  try {
    const id = req.params.id;
    const animal = await Animal.findById(id);
    res.json({
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
    const animal = await Animal.findOne({ name: name });
    res.json({
      message: "Filtro por nombre",
      data: animal,
    });
  } catch (error) {
    next(error);
  }
};

const getAllAnimals = async (req, res, next) => {
  try {
    const animals = await Animal.find();
    res.json({
      message: "Todos los animales",
      data: animals,
    });
  } catch (error) {
    next(error);
  }
};

const updateAnimal = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedAnimal = await Animal.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json({
      message: "Perfil del animal actualizado",
      data: updatedAnimal,
    });
  } catch (error) {
    next(error);
  }
};

const deleteAnimal = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletedAnimal = await Animal.findByIdAndDelete(id);
    res.json({
      message: "Perfil del animal eliminado",
      data: deletedAnimal,
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
