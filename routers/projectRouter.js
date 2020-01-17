const express = require('express');
const router = express.Router();
const ProjectDb = require('../data/helpers/projectModel');
const ActionDb = require('../data/helpers/actionModel');
const validateProjectId = require('../middleware/validateProjectId');
const validateProject = require('../middleware/validateProject');
const validateAction = require('../middleware/validateAction');

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

//gets a list of actions associated with a specific project's id
router.get('/:id/actions', validateProjectId, (req, res) => [
  ProjectDb.getProjectActions(req.params.id)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error retrieving the list of actions' })
    })
])

//adds a new project to the database
router.post('/', validateProject, (req, res) => {
  ProjectDb.insert(req.body)
    .then(newProject => {
      res.status(201).json(newProject);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error adding the project to the database' })
    })
})

//adds a new action to a specified project
router.post('/:id/actions', validateProjectId, validateAction, (req, res) => {
  let action = req.body;
  action = {... action, project_id: req.params.id};

  ActionDb.insert(action)
    .then(newAction => {
      res.status(201).json(newAction);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error adding the action to the specified project' })
    })
})

module.exports = router;