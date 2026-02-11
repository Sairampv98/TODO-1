import express from "express";
import { getF } from "./controller.js";

const  router= express.Router();

router.get("/", getF);


export default router;
