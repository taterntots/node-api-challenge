const ActionDb = require('../data/helpers/actionModel');

function validateActionId(req, res, next) {
  const id = req.params.id;

  ActionDb.get(id)
    .then(action => {
      if (action) {
        req.action = action;
        next();
      } else {
        res.status(400).json({ errorMessage: 'The action with the specified ID does not exist' });
      }
    })
    .catch(erorr => {
      res.status(500).json({ errorMessage: 'Could not retrieve action information for the specified ID' });
    })
}

module.exports = validateActionId;