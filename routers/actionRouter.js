const express = require('express');
const router = express.Router();
const ActionDb = require('../data/helpers/actionModel');
const validateActionId = require('../middleware/validateActionId');
const validateAction = require('../middleware/validateAction');

router.get('/', (req, res) => {
  ActionDb.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error retrieving the list of actions' });
    })
})

router.get('/:id', validateActionId, (req, res) => {
  ActionDb.get()
    .then(actionById => {
      res.status(200).json(req.action); //calls in our req.action from the validateActionId middleware
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'Could not retrieve action information for the specified ID' })
    })
})

router.delete('/:id', validateActionId, (req, res) => {
  ActionDb.remove(req.params.id)
    .then(deleted => {
      res.status(200).json({ success: `Your action was deleted` });
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error deleting your action from the database' })
    })
})

router.put('/:id', validateActionId, validateAction, (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  const updatedAction = { ...changes, id };

  ActionDb.update(id, changes)
    .then(edits => {
      res.status(200).json(updatedAction);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: 'There was an error editing your action information' })
    })
})

module.exports = router;