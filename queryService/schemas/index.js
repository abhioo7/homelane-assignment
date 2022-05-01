const innerSchema = {
    type: "object",
    properties: {
        "date": {type: "string"},
        "price": {type: "integer"},
        "bedrooms": {type: "integer"},
        "bathrooms": {type: "number"},
        "sqft_living": {type: "integer"},
        "sqft_lot": {type: "integer"},
        "floors": {type: "integer"},
        "waterfront": {type: "integer"},
        "view": {type: "integer"},
        "condition": {type: "integer"},
        "sqft_above": {type: "integer"},
        "sqft_basement": {type: "integer"},
        "yr_built": {type: "integer"},
        "yr_renovated": {type: "integer"},
        "street": {type: "string"},
        "city": {type: "string"},
        "statezip": {type: "string"},
        "country": {type: "string"}
    },
    required: ["date","price","bedrooms","bathrooms","sqft_living","sqft_lot","floors","waterfront","view","condition","sqft_above","sqft_basement","yr_built","yr_renovated","street","city","statezip","country"],
    additionalProperties: false
}
const outputSchema = {
    type: "array",
    items: innerSchema,
}

module.exports = {
    outputSchema : outputSchema
}