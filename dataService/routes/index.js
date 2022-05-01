const queryRoutes = require("./data.routes");
const router = require("express").Router();

router.use("/data", queryRoutes);

module.exports = router;