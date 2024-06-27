// app.js
const express = require('express');
const app = express();
const port = 8081;

const knex = require('knex')(require('../knexfile.js')['development']); 

app.get('/', (req, res) => {
    res.send('Application up and running');
})

app.get('/pets', (req, res) => {
    knex('pet')
    .select('*')
    .then(data => {
        res.json(data);
        var petNames = data.map(pet => pet.name);
        response.json(petNames);
    })
}) // Add closing parenthesis here
         