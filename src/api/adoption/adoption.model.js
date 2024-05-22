const mongoose = require("mongoose");

const adoptionSchema = new mongoose.Schema({
  // Datos User
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  // Datos Animal
  animal_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Animal",
    required: true,
  },

  // Datos Proceso Adopción
  adoption_status: {
    type: String,
    enum: ["En proceso", "Rechazado", "Completado"],
    default: "En proceso",
    required: true,
  },
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  phone: { type: String, trim: true, required: true },
  dni: { type: String, trim: true, required: true },
  address: { type: String, trim: true, required: true },
  postalcode: { type: String, trim: true, required: true },
  city: { type: String, trim: true, required: true },
  terms: { type: Boolean },
  has_animals: { type: Boolean },
  other_animals: { type: String, trim: true },
  friendly_animals: { type: String, trim: true },
  purpose: { type: String, trim: true },
  know_needs: { type: String, trim: true },
  know_expenses: { type: String, trim: true },
  know_food: { type: String, trim: true },
  user_from: { type: String, trim: true },
  rent: { type: Boolean },
  allow_animals: { type: Boolean },
  move_out: { type: Boolean },
  has_garden: { type: Boolean },
  live_with_people: { type: Boolean },
  everyone_agrees: { type: Boolean },
  visit: { type: Boolean },
});

const Adoption = mongoose.model("Adoption", adoptionSchema);
module.exports = Adoption;
