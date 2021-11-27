const express = require('express');
const router = express.Router();
const neo4j_calls = require('./../neo4j_calls/neo4j_api');


router.post('/', async function (req, res, next) {
    //Passing in "name" parameter in body of POST request
    console.log(req.body)
    let string = await neo4j_calls.create_user(req.body);
    res.status(200).send(string)
    return 700000;
    //res.status(200).send("test delete")
})

router.put('/:id', async function (req, res, next) {
    //Passing in "name" parameter in body of POST request
    console.log(req.body)
    let string = await neo4j_calls.update_user(req.body);
    res.status(200).send(string)
    return 700000;
    //res.status(200).send("test delete")
})

router.delete('/:id', async function (req, res, next) {
    //Passing in "name" parameter in body of POST request
    //console.log(req.body)
    let string = await neo4j_calls.delete_user(req.params);
    res.status(200).send(string)
    return 700000;
    //res.status(200).send("test delete")
})

router.get('/:id', async function (req, res, next) {
    //Passing in "name" parameter in body of POST request
    let string = await neo4j_calls.get_User_Code(req.params);
    res.status(200).send(string)
    return 700000;
    //res.status(200).send("test delete")
})

router.post('/prestamo/:id', async function (req, res, next) {
    //Passing in "name" parameter in body of POST request
    console.log(req.body)
    let string = await neo4j_calls.create_Reserva(req.body);
    res.status(200).send(string)
    return 700000;
    //res.status(200).send("test delete")
})

router.get('/prestamo/:id', async function (req, res, next) {
    //Passing in "name" parameter in body of POST request
    let string = await neo4j_calls.get_all_Reservas(req.params);
    res.status(200).send(string)
    return 700000;
    //res.status(200).send("test delete")
})

router.delete('/prestamo/:id', async function (req, res, next) {
    //Passing in "name" parameter in body of POST request
    let string = await neo4j_calls.delete_Reservas(req.params);
    res.status(200).send(string)
    return 700000;
    //res.status(200).send("test delete")
})



router.post('/salas/:id', async function (req, res, next) {
    //Passing in "name" parameter in body of POST request
    console.log(req.body)
    let string = await neo4j_calls.create_Reserva_Sala(req.body);
    res.status(200).send(string)
    return 700000;
    //res.status(200).send("test delete")
})

router.get('/salas/:id', async function (req, res, next) {
    //Passing in "name" parameter in body of POST request
    let string = await neo4j_calls.get_all_Reservas_Salas(req.params);
    res.status(200).send(string)
    return 700000;
    //res.status(200).send("test delete")
})

router.delete('/salas/:id', async function (req, res, next) {
    //Passing in "name" parameter in body of POST request
    let string = await neo4j_calls.delete_Reservas_Salas(req.params);
    res.status(200).send(string)
    return 700000;
    //res.status(200).send("test delete")
})

module.exports = router;