function validateAction(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ errorMessage: 'body is empty / missing action data. remember to type all the things' });
  } else if (!req.body.description || !req.body.notes) {
    res.status(400).json({ errorMessage: 'missing description or notes fields' });
  } else {
    next();
  }
}

module.exports = validateAction;