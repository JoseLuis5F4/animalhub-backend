const express = require("express");

const animalRouter = express.Router();

const {
  createAnimal,
  getOneAnimal,
  getOneByName,
  getAllAnimals,
  updateAnimal,
  deleteAnimal,
} = require("./animal.controller");

const { isAuth } = require("../middleware/auth.middleware");

animalRouter.post("/", { isAuth }, createAnimal);
animalRouter.get("/", getAllAnimals);
animalRouter.get("/:id", getOneAnimal);
animalRouter.get("/name/:name", getOneByName);
animalRouter.patch("/:id", { isAuth }, updateAnimal);
animalRouter.delete("/:id", { isAuth }, deleteAnimal);
