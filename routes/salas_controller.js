const express = require('express');
const router = express.Router();
const neo4j_calls = require('./../neo4j_calls/neo4j_api');



router.post('/', async function (req, res, next) {
    //Passing in "name" parameter in body of POST request
    console.log(req.body)
    let string = await neo4j_calls.create_sala(req.body);
    res.status(200).send(string)
    return 700000;
    //res.status(200).send("test delete")
})

router.put('/:id', async function (req, res, next) {
    //Passing in "name" parameter in body of POST request
    console.log(req.body)
    let string = await neo4j_calls.update_sala(req.body);
    res.status(200).send(string)
    return 700000;
    //res.status(200).send("test delete")
})

router.delete('/:id', async function (req, res, next) {
    //Passing in "name" parameter in body of POST request
    // console.log(req.body)
    let string = await neo4j_calls.delete_sala(req.params);
    res.status(200).send(string)
    return 700000;
    //res.status(200).send("test delete")
})

router.get('/', async function (req, res, next) {
    //Passing in "name" parameter in body of POST request
    let string = await neo4j_calls.get_all_Salas();
    res.status(200).send(string)
    return 700000;
    //res.status(200).send("test delete")
})







module.exports = router;