const express = require("express");
const router = express.Router();
const todoController = require("../../../controllers/api/v1/todos");

router.get("/", todoController.getAll);

router.post("/", todoController.create);

router.put("/:id", todoController.update);

router.delete("/:id", todoController.remove);

module.exports = router;