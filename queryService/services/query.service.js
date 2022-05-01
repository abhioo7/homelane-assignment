const axios = require('axios').default;
const Ajv = require("ajv")
const ajv = new Ajv();
const schema = require("../schemas");
const validate = ajv.compile(schema.outputSchema);
const jwt = require("jsonwebtoken");
const config = require('../config');
async function findBudgetHomes(minPrice,maxPrice,res) {
    try
    {
         const response = await axios({
              method: 'get',
              url: `/data/budgetHomes/${minPrice}/${maxPrice}`,
              baseURL: 'http://localhost:3001',
            })
            const valid = validate(response.data.response)
            console.log(valid);
            if(valid)
            {
              res.json({ res: response.data });
            }
            else
            {
              console.log(validate.errors);
            }
    }
    catch(err)
    {
        console.log(err);
    }
}

async function findSqftHomes(minSqft,res) {
  try{
    const response = await axios({
      method: 'get',
      url: `/data/sqftHomes/${minSqft}`,
      baseURL: 'http://localhost:3001',
    })
    res.json({ res: response.data });
  }
  catch(err)
  {
    console.log(err);
  }
}

async function findAgeHomes(year,res) {
  try{
    const response = await axios({
      method: 'get',
      url: `/data/ageHomes/${year}`,
      baseURL: 'http://localhost:3001',
    })
    res.json({ res: response.data });
  }
  catch(err)
  {
    console.log(err);
  }
}

function generateJWTtoken(res)
{
  let token = jwt.sign({ foo: 'bar' },config.secret, {
    expiresIn: 86400 // 24 hours
  });
  res.status(200).send({
    message : "token generated successfully",
    API_KEY : token
  });
}

async function predictHousePrice(res)
{
  try{
    const response = await axios({
      method: 'get',
      url: `/data/predictHousePrice`,
      baseURL: 'http://localhost:3001',
    })
    res.json({ res: response.data });
  }
  catch(err)
  {
    console.log(err);
  }
}
module.exports = {
    findBudgetHomes : findBudgetHomes,
    findSqftHomes : findSqftHomes,
    findAgeHomes : findAgeHomes,
    login : generateJWTtoken,
    predictHousePrice : predictHousePrice
}