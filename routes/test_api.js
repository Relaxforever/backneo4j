const express = require('express');
const router = express.Router();
const neo4j_calls = require('./../neo4j_calls/neo4j_api');

router.get('/', async function (req, res, next) {
    res.status(200).send("Root Response from :8080/test_api")
    return 700000;
})

router.get('/neo4j_get', async function (req, res, next) {
    let result = await neo4j_calls.get_num_nodes();
    console.log("RESULT IS", result)
    res.status(200).send({ result })    //Can't send just a Number; encapsulate with {} or convert to String.     
    return { result };
})



module.exports = router;