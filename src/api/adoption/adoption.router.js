const express = require("express");
const adoptionRouter = express.Router();

const {
  createAdoption,
  getOneAdoption,
  // getOneByNameAdoption,
  getAllAdoptions,
  updateAdoption,
  deleteAdoption,
} = require("./adoption.controller");

const { isAuth } = require("../middleware/auth.middleware");

adoptionRouter.post("/", isAuth, createAdoption);
adoptionRouter.get("/", isAuth, getAllAdoptions);
adoptionRouter.get("/:id", isAuth, getOneAdoption);
// adoptionRouter.get("/adoptions/name/:name", getOneByNameAdoption);
adoptionRouter.patch("/:id", isAuth, updateAdoption);
adoptionRouter.delete("/:id", isAuth, deleteAdoption);

module.exports = adoptionRouter;
