const router = require("express").Router();
const verifyJWT = require("../middleware/authJWT");
const queryController = require("../controllers/query.controller");
router.get("/budgetHomes/:minPrice/:maxPrice",verifyJWT.verifyToken,queryController.getBudgetHomes);
router.get("/sqftHomes/:minSqft",verifyJWT.verifyToken,queryController.getSqftHomes);
router.get("/ageHomes/:year",verifyJWT.verifyToken,queryController.ageHomes);
router.get("/predictHousePrice",verifyJWT.verifyToken,queryController.predictHousePrice);
router.route("/login").get(queryController.login);
module.exports = router;