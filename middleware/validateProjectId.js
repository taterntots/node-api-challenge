const ProjectDb = require('../data/helpers/projectModel');

function validateProjectId(req, res, next) {
  const id = req.params.id;

  ProjectDb.get(id)
    .then(project => {
      if (project) {
        req.project = project;
        next();
      } else {
        res.status(400).json({ errorMessage: 'The project with the specified ID does not exist' });
      }
    })
    .catch(erorr => {
      res.status(500).json({ errorMessage: 'Could not retrieve project information for the specified ID' });
    })
}

module.exports = validateProjectId;