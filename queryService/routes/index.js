const queryRoutes = require("./query.routes");
const router = require("express").Router();

router.use("/query", queryRoutes);

module.exports = router;