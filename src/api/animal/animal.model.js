const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  // Datos del animal
  name: { type: String, trim: true, required: true },
  city: { type: String, trim: true, required: true },
  species: { type: String, trim: true, required: true },
  birthDate: { type: Date, trim: true, required: true },
  age: {
    type: String,
    enum: ["Cachorro", "Joven", "Adulto"],
    required: true,
  },
  gender: { type: String, trim: true, required: true },
  size: {
    type: String,
    enum: ["Pequeño", "Mediano", "Grande"],
    required: true,
  },
  image: { type: String, trim: true, required: false },

  // Características sanitarias
  weight: { type: Number, trim: true, required: true },
  desc: { type: String, trim: true, required: true },
  vaccinated: { type: Boolean, default: false },
  sterilized: { type: Boolean, default: false },
  dewormed: { type: Boolean, default: false },
  healthy: { type: Boolean, default: false },
  identified: { type: Boolean, default: false },
  microchip: { type: Boolean, default: false },
  observations: { type: String, trim: true, required: false },

  // Adopción
  requirements: {
    type: String,
    trim: true,
    default: `No hay requisitos esenciales para adoptar a ${this.name}`,
    required: false,
  },
  adoptionRate: { type: Number, trim: true, required: true },
});

const Animal = mongoose.model("Animal", animalSchema);
module.exports = Animal;
