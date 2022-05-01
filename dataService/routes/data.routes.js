const router = require("express").Router();
const dataController = require("../controllers/data.controller");
router.route("/budgetHomes/:minPriceValue/:maxPriceValue").get(dataController.getBudgetHomes);
router.route("/sqftHomes/:minSqft").get(dataController.getSqftHomes);
router.route("/ageHomes/:year").get(dataController.ageHomes);
router.route("/predictHousePrice").get(dataController.predictHousePrices);

module.exports = router;