const express = require('express');
const router = express.Router();
//const pg = require('pg');
const pool = require('../modules/pool')

router.get('/', (req, res) => {
    let queryText = ` SELECT * FROM "task"`;
    pool.query(queryText)
        .then(result => {
            res.send(results.rows);
        })
        .catch(err => {
            console.log('error getting task', err);
            res.sendStatus(500);

        });
});
router.post('/', (req, res) => {
    let newTask = req.body;
    console.log(`Adding task`, newTask);
    let queryText = `INSERT INTO "tasks" ("task") VALUES ($1);`;
    pool.query(queryText, [newTask.task])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log(`Error adding new task`, error);
            res.sendStatus(500);
        });
});










module.exports = router;
