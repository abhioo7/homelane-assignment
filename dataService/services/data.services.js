const db = require("../queries/db");
const queries = require("../queries/queries.index");
async function findBudgetHomes(minPrice,maxPrice,res) {
    let query = queries.findBudgetHome(minPrice,maxPrice);
    db.query(query, function(err, results, fields) {
        return res.json({ response: results });
    });
}

async function findSqftHomes(minSqft,res) {
    let query = queries.findSqftHomes(minSqft);
    db.query(query, function(err, results, fields) {
      return res.json({ response: results });
   });
}

async function findAgeHomes(year,res) {
    let query = queries.findAgeHomes(year);
    db.query(query, function(err, results, fields) {
    return res.json({ response: results });
  });
}

async function predictHousePrices(res) {
    let query = queries.housePricePredict();
    let newPriceResponseArray = [];
    db.query(query, function(err,results, fields) {
        results.map((homeDetailsObject,index) => {
            let newPrice = Math.ceil((((homeDetailsObject.bedrooms*homeDetailsObject.bathrooms*(homeDetailsObject.sqft_living/homeDetailsObject.sqft_lot)*homeDetailsObject.floors)+ homeDetailsObject.waterfront + homeDetailsObject.view)* homeDetailsObject.condition * (homeDetailsObject.sqft_above + homeDetailsObject.sqft_basement) - 10 * (2022 - Math.max(homeDetailsObject.yr_built, homeDetailsObject.yr_renovated)))*100)
            homeDetailsObject.predictedPrice = newPrice;
            newPriceResponseArray.push(homeDetailsObject);
        })
        return res.json({ response: newPriceResponseArray});
    })
}
module.exports = {
    findBudgetHomes : findBudgetHomes,
    findSqftHomes : findSqftHomes,
    findAgeHomes : findAgeHomes,
    predictHousePrices : predictHousePrices
}