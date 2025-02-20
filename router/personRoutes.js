import express from 'express';
const router = express.Router();
import { create, get, getbyid, edit, deletePerson } from '../controller/personController.js';

router.post("/create", create);
router.get("/get", get);
router.get("/getbyid/:id", getbyid);
router.put("/edit/:id", edit);
router.delete("/delete/:id", deletePerson );

export {router}; 
