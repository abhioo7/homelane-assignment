const dataService = require("../services/data.services");
exports.getBudgetHomes = (req,res) => {
 const minPrice = req.params.minPriceValue;
 const maxPrice = req.params.maxPriceValue;
 dataService.findBudgetHomes(minPrice,maxPrice,res);
}

exports.getSqftHomes = (req,res) => {
  console.log(req.ip);
  console.log(req);
  const minSqft = req.params.minSqft;
  dataService.findSqftHomes(minSqft,res);
} 

exports.ageHomes = (req,res) => {
    const year = req.params.year;
    dataService.findAgeHomes(year,res);
}

exports.predictHousePrices = (req,res) => {
   dataService.predictHousePrices(res);
}