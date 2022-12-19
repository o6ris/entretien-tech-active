const express = require("express");

const router = express.Router();

const numberControllers = require("./controllers/numberControllers");

/**
 * EXEMPLE DE ROUTES !
 */
// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

router.get("/numbers", numberControllers.browse);
router.post("/numbers", numberControllers.add);
router.delete("/numbers/:id", numberControllers.destroy);

module.exports = router;
