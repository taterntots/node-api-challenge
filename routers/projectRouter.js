const express = require('express');
const router = express.Router();
const ProjectDb = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
  ProjectDb.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error retrieving the list of projects' })
    })
})



module.exports = router;