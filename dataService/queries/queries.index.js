function findBudgetHomeQuery(minPrice,maxPrice)
{
    let query = `SELECT * FROM homelane where price < ${maxPrice} and price > ${minPrice} ;`;
    return query;
}

function findSqftHomesQuery(minSqft)
{
   let query = `SELECT * FROM homelane where sqft_living > ${minSqft}`;
   return query; 
}

function findAgeHomesQuery(year)
{
    let query = `SELECT * FROM homelane where yr_built > ${year} or yr_renovated > ${year}`
    return query;
}

function housePricePredictQuery()
{
    let query = `SELECT * FROM homelane`;
    return query;
}
module.exports = {
    findAgeHomes : findAgeHomesQuery,
    findBudgetHome : findBudgetHomeQuery,
    findSqftHomes : findSqftHomesQuery,
    housePricePredict : housePricePredictQuery
}