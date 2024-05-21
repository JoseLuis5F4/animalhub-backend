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
    required: true,
  },
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  phone: { type: String, trim: true, required: true },
  dni: { type: String, trim: true, required: true },
  address: { type: String, trim: true, required: true },
  postalcode: { type: String, trim: true, required: true },
  city: { type: String, trim: true, required: true },
  terms: { type: Boolean, required: true },
  has_animals: { type: Boolean, required: true },
  other_animals: { type: String, trim: true, required: false },
  friendly_animals: { type: String, trim: true, required: false },
  purpose: { type: String, trim: true, required: true },
  know_needs: { type: String, trim: true, required: true },
  know_expenses: { type: String, trim: true, required: true },
  know_food: { type: String, trim: true, required: true },
  user_from: { type: String, trim: true, required: true },
  rent: { type: Boolean, required: true },
  allow_animals: { type: Boolean, required: true },
  move_out: { type: Boolean, required: true },
  has_garden: { type: Boolean, required: true },
  live_with_people: { type: Boolean, required: true },
  everyone_agrees: { type: Boolean, required: true },
  visit: { type: Boolean, required: true },
});

const Adoption = mongoose.model("Adoption", adoptionSchema);
module.exports = Adoption;
