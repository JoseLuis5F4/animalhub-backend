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
});

const Adoption = mongoose.model("Adoption", adoptionSchema);
module.exports = Adoption;
