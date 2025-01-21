const express = require('express');
const router = express.Router();
const PersonController = require('../controller/personController');

router.post("/create", PersonController.create);
router.get("/get", PersonController.get);
router.get("/getbyid/:id", PersonController.getbyid);
router.put("/edit/:id", PersonController.edit);
router.delete("/delete/:id",PersonController.delete);

module.exports = router;   