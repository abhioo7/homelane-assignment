const queryService = require("../services/query.service");
exports.getBudgetHomes = (req,res) => {
 const minPrice = req.params.minPrice;
 const maxPrice = req.params.maxPrice;
 queryService.findBudgetHomes(minPrice,maxPrice,res);
}

exports.getSqftHomes = (req,res) => {
  const minSqft = req.params.minSqft;
  queryService.findSqftHomes(minSqft,res);
} 

exports.ageHomes = (req,res) => {
    const year = req.params.year;
    queryService.findAgeHomes(year,res);
}

exports.predictHousePrice = (req,res) => {
  queryService.predictHousePrice(res);
}
exports.login = (req,res) => {
  queryService.login(res);
};