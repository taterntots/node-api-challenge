const express = require('express');
const router = express.Router();
const ProjectDb = require('../data/helpers/projectModel');
const validateProjectId = require('../middleware/validateProjectId');

//gets a list of projects
router.get('/', (req, res) => {
  ProjectDb.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error retrieving the list of projects' })
    })
})

//gets a specific project by ID. also shows a list of all actions associated with the pulled project
router.get('/:id', validateProjectId, (req, res) => {
  ProjectDb.get()
  .then(projectById => {
    res.status(200).json(req.project);
  })
  .catch(error => {
    res.status(500).json({ errorMessage: 'Could not retrieve project information for the specified ID' })
  })
})

module.exports = router;