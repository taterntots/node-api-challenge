function validateProject(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ errorMessage: 'body is empty / missing project data. remember to type all the things' });
  } else if (!req.body.name || !req.body.description) {
    res.status(400).json({ errorMessage: 'missing name or description fields' });
  } else {
    next();
  }
}

module.exports = validateProject;